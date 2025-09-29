/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true }
};

module.exports = nextConfig;
