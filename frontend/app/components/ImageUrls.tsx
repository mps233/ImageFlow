import { useState, useCallback } from "react";
import { ImageFile } from "../types";
import { buildMarkdownLink } from "../utils/imageUtils";
import { copyToClipboard } from "../utils/clipboard";
import { getFullUrl } from "../utils/baseUrl";
import { CheckIcon, CopyIcon, ImageIcon } from "./ui/icons";

interface ImageUrlsProps {
  image: ImageFile;
}

export const ImageUrls = ({ image }: ImageUrlsProps) => {
  const [copyStatus, setCopyStatus] = useState<{ type: string } | null>(null);
  const [copyStates, setCopyStates] = useState<Record<string, boolean>>({});

  const handleCopy = (
    text: string,
    type: string,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) e.stopPropagation();

    copyToClipboard(text)
      .then((success) => {
        if (success) {
          setCopyStatus({ type });
          setCopyStates({ [type]: true });
          setTimeout(() => {
            setCopyStatus(null);
            setCopyStates({ [type]: false });
          }, 2000);
        } else {
          console.error("复制失败");
        }
      })
      .catch((err) => {
        console.error("复制失败:", err);
      });
  };

  const originalUrl = getFullUrl(image.urls?.original || "");
  const webpUrl = getFullUrl(image.urls?.webp || "");
  const avifUrl = getFullUrl(image.urls?.avif || "");
  const currentFormatUrl =
    image.format.toLowerCase() === "webp"
      ? webpUrl
      : image.format.toLowerCase() === "avif"
      ? avifUrl
      : originalUrl;
  const markdownLink = buildMarkdownLink(currentFormatUrl!, image.filename);

  const CopyButton = ({ type, text }: { type: string; text: string }) => (
    <button
      type="button"
      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-r-lg px-2 py-1 flex items-center justify-center"
      onClick={(e) => handleCopy(text, type, e)}
      aria-label="复制链接"
    >
      {copyStates[type] ? (
        <CheckIcon className="h-3 w-3" />
      ) : (
        <CopyIcon className="h-3 w-3" />
      )}
    </button>
  );

  const UrlBox = ({
    icon,
    label,
    url,
    type,
  }: {
    icon: string;
    label: string;
    url: string;
    type: string;
  }) => (
    <div className="mb-1">
      <div className="flex items-center gap-1 mb-1">
        <ImageIcon className={`h-3 w-3 ${icon}`} />
        <div className="text-xs font-medium">{label}</div>
      </div>

      <div className="rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center relative">
        <div className="flex-1 px-2 py-1 text-xs font-mono overflow-hidden text-ellipsis">
          {url}
        </div>
        <CopyButton type={type} text={url} />
      </div>
    </div>
  );

  return (
    <div className="space-y-1">
      <div className="mb-1">
        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
          可用格式
        </label>
      </div>

      {/* 原始格式链接 */}
      <UrlBox
        icon="text-blue-500"
        label={image.format.toLowerCase() === "gif" ? "GIF 动图" : "原始格式"}
        url={originalUrl!}
        type="original"
      />

      {/* 仅在非GIF图片时显示WebP和AVIF格式 */}
      {image.format.toLowerCase() !== "gif" && (
        <>
          <UrlBox
            icon="text-purple-500"
            label="WebP格式"
            url={webpUrl!}
            type="webp"
          />
          <UrlBox
            icon="text-green-500"
            label="AVIF格式"
            url={avifUrl!}
            type="avif"
          />
        </>
      )}

      {/* Markdown格式链接 */}
      <UrlBox
        icon="text-amber-500"
        label="Markdown格式"
        url={markdownLink}
        type="markdown"
      />
    </div>
  );
};
