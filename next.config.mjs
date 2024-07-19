/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/joe',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/', // <----- THIS IS THE ISSUE
  },
};

export default nextConfig;
