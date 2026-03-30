import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed ads.txt redirect to allow direct serving from public folder
  // Google AdSense requires ads.txt to be served directly without redirects
};

export default nextConfig;
