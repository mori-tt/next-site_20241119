import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES ? "/next-site_20241119" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
