package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"math"
	"net/http"
	"os"
	"path/filepath"
	"sort"
	"strconv"
	"strings"

	"github.com/Yuri-NagaSaki/ImageFlow/config"
	"github.com/Yuri-NagaSaki/ImageFlow/utils"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

// ImageInfo represents information about an image
type ImageInfo struct {
	ID          string `json:"id"`          // Filename without extension
	FileName    string `json:"fileName"`    // Full filename with extension
	URL         string `json:"url"`         // URL to access the image
	Orientation string `json:"orientation"` // landscape or portrait
	Format      string `json:"format"`      // original, webp, avif
	Size        int64  `json:"size"`        // File size in bytes
	Path        string `json:"path"`        // Path relative to storage root
	StorageType string `json:"storageType"` // "local" or "s3"
}

// PaginatedResponse represents a paginated response with images
type PaginatedResponse struct {
	Success    bool        `json:"success"`    // Whether the request was successful
	Images     []ImageInfo `json:"images"`     // Images for current page
	Page       int         `json:"page"`       // Current page number
	Limit      int         `json:"limit"`      // Number of items per page
	TotalPages int         `json:"totalPages"` // Total number of pages
	Total      int         `json:"total"`      // Total number of images
}

// ListImagesHandler returns a handler for listing images
func ListImagesHandler(cfg *config.Config) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Get storage type from environment
		storageType := os.Getenv("STORAGE_TYPE")

		// Check for API key
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "未提供授权信息", http.StatusUnauthorized)
			return
		}

		parts := strings.SplitN(authHeader, " ", 2)
		if len(parts) != 2 || parts[0] != "Bearer" {
			http.Error(w, "授权格式无效", http.StatusUnauthorized)
			return
		}

		apiKey := parts[1]
		if apiKey != cfg.APIKey {
			http.Error(w, "API密钥无效", http.StatusUnauthorized)
			return
		}

		// Process query parameters
		orientation := r.URL.Query().Get("orientation")
		format := r.URL.Query().Get("format")

		// Parse pagination parameters
		pageStr := r.URL.Query().Get("page")
		limitStr := r.URL.Query().Get("limit")

		// Default values
		if orientation == "" {
			orientation = "landscape" // landscape, portrait
		}
		if format == "" {
			format = "original" // original, webp, avif, gif
		}

		// Set default pagination values
		page := 1
		limit := 12 // Default items per page

		// Parse page number
		if pageStr != "" {
			pageVal, err := strconv.Atoi(pageStr)
			if err == nil && pageVal > 0 {
				page = pageVal
			}
		}

		// Parse limit
		if limitStr != "" {
			limitVal, err := strconv.Atoi(limitStr)
			if err == nil && limitVal > 0 && limitVal <= 50 { // Cap at 50 items per page
				limit = limitVal
			}
		}

		var allImages []ImageInfo
		var err error

		// Handle special case for GIF format
		if format == "gif" {
			// For GIF files, orientation doesn't matter
			if storageType == "s3" {
				allImages, err = listS3GIFImages()
			} else {
				allImages, err = listGIFImages(cfg.ImageBasePath)
			}
		} else {
			// Handle regular image formats
			if storageType == "s3" {
				allImages, err = listS3Images(orientation, format)
			} else {
				allImages, err = listLocalImages(cfg.ImageBasePath, orientation, format)
			}
		}

		if err != nil {
			log.Printf("Error listing images: %v", err)
			http.Error(w, "获取图片列表失败", http.StatusInternalServerError)
			return
		}

		// Sort images by filename in descending order (newest first)
		sort.Slice(allImages, func(i, j int) bool {
			return allImages[i].FileName > allImages[j].FileName
		})

		// Calculate pagination values
		total := len(allImages)
		totalPages := int(math.Ceil(float64(total) / float64(limit)))

		// Ensure page is within valid range
		if page > totalPages && totalPages > 0 {
			page = totalPages
		}

		// Calculate start and end indices for the current page
		start := (page - 1) * limit
		end := start + limit

		// Ensure end index is within bounds
		if end > total {
			end = total
		}

		// Extract the subset of images for the current page
		var pagedImages []ImageInfo
		if start < total {
			pagedImages = allImages[start:end]
		} else {
			pagedImages = []ImageInfo{} // Empty slice for out of range pages
		}

		// Set response headers
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)

		// Encode and send the paginated response
		response := PaginatedResponse{
			Success:    true,
			Images:     pagedImages,
			Page:       page,
			Limit:      limit,
			TotalPages: totalPages,
			Total:      total,
		}

		if err := json.NewEncoder(w).Encode(response); err != nil {
			log.Printf("Error encoding JSON response: %v", err)
		}
	}
}

// listLocalImages returns a list of images from the local filesystem
func listLocalImages(basePath, orientation, format string) ([]ImageInfo, error) {
	var images []ImageInfo
	var orientations []string
	var formats []string

	// Set orientation
	orientations = []string{orientation}

	// Set format
	formats = []string{format}

	for _, orientVal := range orientations {
		for _, formatVal := range formats {
			var dirPath string
			var extension string

			// Construct the path based on format
			if formatVal == "original" {
				dirPath = filepath.Join(basePath, "original", orientVal)
				extension = ""
			} else {
				dirPath = filepath.Join(basePath, orientVal, formatVal)
				extension = "." + formatVal
			}

			// List files in the directory
			files, err := os.ReadDir(dirPath)
			if err != nil {
				// Skip directory if it doesn't exist
				log.Printf("Warning: Could not read directory %s: %v", dirPath, err)
				continue
			}

			// Filter and collect image files
			for _, file := range files {
				if file.IsDir() {
					continue
				}

				fileName := file.Name()
				if (formatVal == "original" && (strings.HasSuffix(strings.ToLower(fileName), ".jpg") ||
					strings.HasSuffix(strings.ToLower(fileName), ".jpeg") ||
					strings.HasSuffix(strings.ToLower(fileName), ".jpg") ||
					strings.HasSuffix(strings.ToLower(fileName), ".png"))) ||
					(formatVal != "original" && strings.HasSuffix(strings.ToLower(fileName), extension)) {
					fileInfo, err := file.Info()
					if err != nil {
						log.Printf("Warning: Could not get file info for %s: %v", fileName, err)
						continue
					}

					// Construct image URL
					var firstPart, thirdPart string
					if formatVal == "original" {
						firstPart = "original"
						thirdPart = ""
					} else {
						firstPart = ""
						thirdPart = formatVal
					}
					relPath := filepath.Join(firstPart, orientVal, thirdPart, fileName)

					var url string
					storageType := os.Getenv("STORAGE_TYPE")
					if storageType == "local" {
						url = fmt.Sprintf("/images/%s", relPath)
					} else {
						// For S3 storage
						customDomain := os.Getenv("CUSTOM_DOMAIN")
						if customDomain != "" {
							url = fmt.Sprintf("%s/%s", strings.TrimSuffix(customDomain, "/"), relPath)
						} else {
							// Fallback to S3 endpoint with bucket name
							endpoint := strings.TrimSuffix(os.Getenv("S3_ENDPOINT"), "/")
							bucket := os.Getenv("S3_BUCKET")
							url = fmt.Sprintf("%s/%s/%s", endpoint, bucket, relPath)
						}
					}

					// Extract ID (filename without extension)
					id := strings.TrimSuffix(fileName, filepath.Ext(fileName))

					// Add image info to the result
					images = append(images, ImageInfo{
						ID:          id,
						FileName:    fileName,
						URL:         url,
						Orientation: orientVal,
						Format:      formatVal,
						Size:        fileInfo.Size(),
						Path:        relPath,
						StorageType: "local",
					})
				}
			}
		}
	}

	return images, nil
}

// listS3GIFImages returns a list of GIF images from the special gif directory in S3
func listS3GIFImages() ([]ImageInfo, error) {
	var images []ImageInfo
	bucket := os.Getenv("S3_BUCKET")
	prefix := "gif/"

	// List objects with the gif/ prefix
	paginator := s3.NewListObjectsV2Paginator(utils.S3Client, &s3.ListObjectsV2Input{
		Bucket: aws.String(bucket),
		Prefix: aws.String(prefix),
	})

	// Process each page of results
	for paginator.HasMorePages() {
		page, err := paginator.NextPage(context.TODO())
		if err != nil {
			return nil, fmt.Errorf("error listing S3 objects: %v", err)
		}

		for _, obj := range page.Contents {
			key := *obj.Key
			fileName := filepath.Base(key)

			// Skip objects that are not .gif files
			if !strings.HasSuffix(strings.ToLower(fileName), ".gif") {
				continue
			}

			// Construct URL
			var url string
			customDomain := os.Getenv("CUSTOM_DOMAIN")
			if customDomain != "" {
				url = fmt.Sprintf("%s/%s", strings.TrimSuffix(customDomain, "/"), key)
			} else {
				endpoint := strings.TrimSuffix(os.Getenv("S3_ENDPOINT"), "/")
				url = fmt.Sprintf("%s/%s/%s", endpoint, bucket, key)
			}

			// Extract ID (filename without extension)
			id := strings.TrimSuffix(fileName, filepath.Ext(fileName))

			// Add to results
			images = append(images, ImageInfo{
				ID:          id,
				FileName:    fileName,
				URL:         url,
				Orientation: "gif",
				Format:      "gif",
				Size:        *obj.Size,
				Path:        key,
				StorageType: "s3",
			})
		}
	}

	return images, nil
}

// listGIFImages returns a list of GIF images from the special gif directory
func listGIFImages(basePath string) ([]ImageInfo, error) {
	var images []ImageInfo

	// Path for GIF files
	dirPath := filepath.Join(basePath, "gif")

	// List files in the directory
	files, err := os.ReadDir(dirPath)
	if err != nil {
		// Return empty list if directory doesn't exist
		log.Printf("Warning: Could not read GIF directory %s: %v", dirPath, err)
		return images, nil
	}

	// Filter and collect GIF files
	for _, file := range files {
		if file.IsDir() {
			continue
		}

		fileName := file.Name()
		if strings.HasSuffix(strings.ToLower(fileName), ".gif") {
			// Get file info for size
			fileInfo, err := file.Info()
			if err != nil {
				log.Printf("Warning: Could not get file info for %s: %v", fileName, err)
				continue
			}

			// Construct image URL and path
			relPath := filepath.Join("gif", fileName)
			url := ""
			storageType := os.Getenv("STORAGE_TYPE")
			if storageType == "local" {
				url = fmt.Sprintf("/images/%s", relPath)
			} else {
				// For S3 storage
				customDomain := os.Getenv("CUSTOM_DOMAIN")
				if customDomain != "" {
					url = fmt.Sprintf("%s/%s", strings.TrimSuffix(customDomain, "/"), relPath)
				} else {
					// Fallback to S3 endpoint with bucket name
					endpoint := strings.TrimSuffix(os.Getenv("S3_ENDPOINT"), "/")
					bucket := os.Getenv("S3_BUCKET")
					url = fmt.Sprintf("%s/%s/%s", endpoint, bucket, relPath)
				}
			}

			// Extract ID (filename without extension)
			id := strings.TrimSuffix(fileName, filepath.Ext(fileName))

			// Add image info to the result
			images = append(images, ImageInfo{
				ID:          id,
				FileName:    fileName,
				URL:         url,
				Orientation: "gif", // Use "gif" as orientation to mark it as special
				Format:      "gif",
				Size:        fileInfo.Size(),
				Path:        relPath,
				StorageType: "local",
			})
		}
	}

	return images, nil
}

// listS3Images returns a list of images from S3 storage
func listS3Images(orientation, format string) ([]ImageInfo, error) {
	// For S3, we don't use basePath, but we need to handle GIF format separately
	if format == "gif" {
		// Fetch GIF images from S3 with gif/ prefix
		return listS3GIFImages()
	}
	var images []ImageInfo
	var orientations []string
	var formats []string
	bucket := os.Getenv("S3_BUCKET")

	// Set orientation
	orientations = []string{orientation}

	// Set format
	formats = []string{format}

	for _, orientVal := range orientations {
		for _, formatVal := range formats {
			var prefix string
			var extension string

			// Construct the prefix based on format
			if formatVal == "original" {
				prefix = "original/" + orientVal + "/"
				extension = ""
			} else {
				prefix = orientVal + "/" + formatVal + "/"
				extension = "." + formatVal
			}

			// List objects with the prefix
			paginator := s3.NewListObjectsV2Paginator(utils.S3Client, &s3.ListObjectsV2Input{
				Bucket: aws.String(bucket),
				Prefix: aws.String(prefix),
			})

			// Process each page of results
			for paginator.HasMorePages() {
				output, err := paginator.NextPage(context.Background())
				if err != nil {
					return nil, err
				}

				// Process each object
				for _, obj := range output.Contents {
					key := *obj.Key
					fileName := filepath.Base(key)

					if (formatVal == "original" && !(strings.HasSuffix(strings.ToLower(fileName), ".jpg") ||
						strings.HasSuffix(strings.ToLower(fileName), ".jpeg") ||
						strings.HasSuffix(strings.ToLower(fileName), ".jpg") ||
						strings.HasSuffix(strings.ToLower(fileName), ".png"))) ||
						(formatVal != "original" && !strings.HasSuffix(strings.ToLower(fileName), extension)) {
						continue
					}

					// Extract ID (filename without extension)
					id := strings.TrimSuffix(fileName, filepath.Ext(fileName))

					// Construct image URL using the getImageURL helper
					url := getImageURL(key)

					// Add image info to the result
					images = append(images, ImageInfo{
						ID:          id,
						FileName:    fileName,
						URL:         url,
						Orientation: orientVal,
						Format:      formatVal,
						Size:        *obj.Size,
						Path:        key,
						StorageType: "s3",
					})
				}
			}
		}
	}

	return images, nil
}
