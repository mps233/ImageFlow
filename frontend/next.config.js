/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from parent directory's .env file
const parentEnvPath = path.resolve(__dirname, '../.env');
let envConfig = {};

if (fs.existsSync(parentEnvPath)) {
  envConfig = dotenv.parse(fs.readFileSync(parentEnvPath));
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  env: {
    NEXT_PUBLIC_MAX_UPLOAD_COUNT: envConfig.MAX_UPLOAD_COUNT || process.env.MAX_UPLOAD_COUNT || '10',
  },
  // 禁用服务端组件
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 
