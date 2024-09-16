/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export only when building in GitHub Actions
  output: process.env.GITHUB_ACTION ? 'export' : undefined,
  reactStrictMode: true,
  // basePath: '/joe', // Set this to the repository name in the GitHub Pages URL
  // assetPrefix: '/joe', // Set this to the same as basePath
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
        hostname: 'joe-backend.onrender.com', // Add this entry
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'joe-backend-production.up.railway.app',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'similar-starfish-afterhoursdev-38e98811.koyeb.app',
        pathname: '/uploads/**',
      },
      // Add more patterns as needed
    ],
  },
};

export default nextConfig;
