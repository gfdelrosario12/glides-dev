import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable ESLint during production builds (critical for Vercel)
  eslint: {
    // Fail build on ESLint errors
    ignoreDuringBuilds: false,
  },
  // Enable TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
