import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
  },
  output: 'export',
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
