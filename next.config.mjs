/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/joe',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
