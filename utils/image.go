package utils

import (
	"bytes"
	"errors"
	"image"
	_ "image/gif"  // Register GIF format
	_ "image/jpeg" // Register JPEG format
	_ "image/png"  // Register PNG format
	"io"
	"io/fs"
	"math/rand"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// ImageFormatInfo contains information about an image's format
type ImageFormatInfo struct {
	Format    string // Format name (e.g., "jpeg", "png", "gif")
	Extension string // File extension (e.g., ".jpg", ".png", ".gif")
	MimeType  string // MIME type (e.g., "image/jpeg", "image/png", "image/gif")
}

// SupportedImageExtensions contains all file extensions recognized by the application
var SupportedImageExtensions = []string{".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"}

// Global random source with proper seeding
var globalRand = rand.New(rand.NewSource(time.Now().UnixNano()))

// DetectImageFormat detects the format of an image from its binary data
func DetectImageFormat(data []byte) (ImageFormatInfo, error) {
	// Create a reader from the data
	r := bytes.NewReader(data)

	// Detect the image format
	_, format, err := image.DecodeConfig(r)
	if err != nil {
		return ImageFormatInfo{}, err
	}

	// Rewind the reader for future use
	if _, err = r.Seek(0, io.SeekStart); err != nil {
		return ImageFormatInfo{}, err
	}

	// Convert format to lowercase
	format = strings.ToLower(format)

	// Map format to extension and MIME type
	switch format {
	case "jpeg":
		return ImageFormatInfo{
			Format:    format,
			Extension: ".jpg",
			MimeType:  "image/jpeg",
		}, nil
	case "png":
		return ImageFormatInfo{
			Format:    format,
			Extension: ".png",
			MimeType:  "image/png",
		}, nil
	case "gif":
		return ImageFormatInfo{
			Format:    format,
			Extension: ".gif",
			MimeType:  "image/gif",
		}, nil
	case "webp":
		return ImageFormatInfo{
			Format:    format,
			Extension: ".webp",
			MimeType:  "image/webp",
		}, nil
	case "avif":
		return ImageFormatInfo{
			Format:    format,
			Extension: ".avif",
			MimeType:  "image/avif",
		}, nil
	default:
		// Default to jpeg for unknown formats
		return ImageFormatInfo{
			Format:    "jpeg",
			Extension: ".jpg",
			MimeType:  "image/jpeg",
		}, nil
	}
}

// IsImageFile checks if a filename has a supported image extension
func IsImageFile(filename string) bool {
	ext := strings.ToLower(filepath.Ext(filename))
	for _, supportedExt := range SupportedImageExtensions {
		if ext == supportedExt {
			return true
		}
	}
	return false
}

// GetRandomImage returns a path to a random image with appropriate format for device and browser
//
// DEPRECATED: This function is deprecated and will be removed in a future version.
// Use handlers.RandomImage, handlers.RandomImageHandler, or handlers.LocalRandomImageHandler instead,
// which offer better PNG support and more consistent behavior across storage types.
func GetRandomImage(basePath string, deviceType DeviceType, avifSupport bool) (string, error) {
	// Select image orientation based on device type
	orientation := "landscape"
	if deviceType == Mobile {
		orientation = "portrait"
	}

	// Select image format based on browser support
	format := "webp"
	if avifSupport {
		format = "avif"
	}

	// Construct the image directory path
	dirPath := filepath.Join(basePath, orientation, format)

	// Get all files in the directory
	files, err := os.ReadDir(dirPath)
	if err != nil {
		return "", err
	}

	// Filter for image files
	var imageFiles []fs.DirEntry
	for _, file := range files {
		if !file.IsDir() && IsImageFile(file.Name()) {
			imageFiles = append(imageFiles, file)
		}
	}

	if len(imageFiles) == 0 {
		return "", errors.New("no images found in directory")
	}

	// Select a random image
	randomIndex := globalRand.Intn(len(imageFiles))
	selectedImage := imageFiles[randomIndex]

	return filepath.Join(dirPath, selectedImage.Name()), nil
}
