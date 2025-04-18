"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageFile } from "../types";
import { ImagePreview } from "./ImagePreview";
import { ImageInfo } from "./ImageInfo";
import { ImageUrls } from "./ImageUrls";
import { DeleteConfirm } from "./DeleteConfirm";
import { Cross1Icon, TrashIcon } from "./ui/icons";

interface ImageModalProps {
  image: ImageFile | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: string) => Promise<void>;
}

export default function ImageModal({ image, isOpen, onClose, onDelete }: ImageModalProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShowDeleteConfirm(false);
      setIsDeleting(false);
    }
  }, [isOpen]);

  const handleDelete = async () => {
    if (!image) return;

    try {
      setIsDeleting(true);
      await onDelete(image.id);
      setShowDeleteConfirm(false);  
      onClose();  
    } catch (err) {
      console.error("删除失败:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 dark:bg-white/10 rounded-full hover:bg-black/30 dark:hover:bg-white/20 transition-colors"
              onClick={onClose}
            >
              <Cross1Icon className="h-5 w-5 text-white" />
            </button>

            {/* 文件名标题 */}
            <div className="border-b border-gray-100 dark:border-gray-800 px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white truncate">{image.filename}</h3>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* 图片预览区域 */}
              <div className="relative w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
                <div className="relative w-full" style={{ height: '380px' }}>
                  <ImagePreview image={image} />
                </div>
              </div>

              {/* 图片信息区域 */}
              <div className="w-full md:w-1/2 p-4 flex flex-col h-full md:h-[380px]">
                <div className="flex flex-col h-full">
                  <ImageInfo image={image} />
                  <ImageUrls image={image} />
                </div>

                {/* 底部删除区域 */}
                <div className="pt-1 border-t border-gray-100 dark:border-gray-800 mt-1">
                  {!showDeleteConfirm ? (
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="flex items-center justify-center w-full p-2 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <TrashIcon className="h-4 w-4 mr-1" />
                      删除图片
                    </button>
                  ) : (
                    <DeleteConfirm
                      isDeleting={isDeleting}
                      onCancel={() => setShowDeleteConfirm(false)}
                      onConfirm={handleDelete}
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
