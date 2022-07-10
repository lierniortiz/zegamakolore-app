module.exports = [
  {
  name: "strapi::security",
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "conect-src": ["'self'", "https:"],
        "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com/dg8rkeczb"],
        "media-src": ["'self'", "data:", "blob:"],
        upgradeInsecureRequests: null,
      }
    }
  }
  }
];
