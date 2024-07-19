/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static exports
  reactStrictMode: true,
  images: {
    loader: 'default', // Use default loader or 'imgix', 'cloudinary', etc.
    path: '/', // Adjust path based on basePath and where your images are located
  },
};

export default nextConfig;
