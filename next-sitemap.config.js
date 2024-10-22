/** @type {import('next-sitemap').IConfig} */
const dev = process.env.NODE_ENV !== 'production';

const config = {
  siteUrl: dev
    ? 'http://localhost:3000'
    : 'https://www.georgiosantonopoulos.gr',
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

export default config; // Use CommonJS export
