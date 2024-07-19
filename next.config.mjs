/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/joe',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
