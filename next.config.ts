import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  allowedDevOrigins: ['192.168.7.21', '192.168.9.21'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
