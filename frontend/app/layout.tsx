import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure font with display: swap to avoid FOIT (Flash of Invisible Text)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: false, // Don't preload the font
});

export const metadata: Metadata = {
  title: "ImageFlow - 图片管理",
  description: "一个简单而强大的图片管理工具",
  icons: {
    icon: [
      { url: "/static/favicon.ico", sizes: "any" },
      { url: "/static/favicon.svg", type: "image/svg+xml" },
      { url: "/static/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/static/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/static/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/static/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="light">
      <body
        className={`${inter.className} page-bg py-10 transition-colors duration-300 light-mode`}
      >
        {/* 动态背景 */}
        <div className="animated-bg">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        {children}

        {/* 页脚 */}
        <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-gray-600 dark:text-gray-400">
          Create By{" "}
          <a
            href="https://catcat.blog/"
            target="_blank"
            className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            猫猫博客
          </a>
        </div>
      </body>
    </html>
  );
}
