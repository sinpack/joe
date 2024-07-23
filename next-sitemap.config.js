/** @type {import('next-sitemap').IConfig} */
const dev = process.env.NODE_ENV !== 'production';

const config = {
  siteUrl: dev ? 'http://localhost:3000' : 'https://your-deployed-site-url.com',
  generateRobotsTxt: true, // Optional: Generate a robots.txt file
  // changefreq: 'daily', // Optional: Frequency of change
  // priority: 0.7, // Optional: Default priority
  // exclude: ['/api/*'], // Optional: Exclude specific routes
  // robotsTxtOptions: {
  //   policies: [
  //     {
  //       userAgent: '*',
  //       allow: '/',
  //     },
  //     {
  //       userAgent: 'Googlebot',
  //       disallow: '/private',
  //     },
  //   ],
  // },
};

module.exports = config; // Use CommonJS export
