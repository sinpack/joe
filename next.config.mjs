/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // enables static exports
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with your actual hostname
        pathname: '/uploads/**',
      },
      // Add more patterns as needed
    ],
  },
};

export default nextConfig;
