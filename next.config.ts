import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
    useCache: true,
    cacheLife: {
      seconds: {
        stale: 0,
        revalidate: 300,
        expire: 300
      }
    }
  },
};

export default nextConfig;
