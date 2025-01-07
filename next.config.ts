import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.dsm.com.br',
      },
    ],
  },
};

export default nextConfig;
