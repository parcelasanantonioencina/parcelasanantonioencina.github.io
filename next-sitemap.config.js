const config = {
  siteUrl: 'https://parcelasanantonioencina.github.io/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/private/' },
      { userAgent: '*', allow: '/' },
    ],
  },
};

module.exports = config;
