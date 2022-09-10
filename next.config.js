const { setConfig } = require("next/config");
const { i18n } = require("./next-i18next.config");
module.exports = {
  i18n,
  images: {
    domains: [
      "cloud.funda.nl",
      "istockphoto.com",
      "firebasestorage.googleapis.com",
      "media.istockphoto.com",
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  productionBrowserSourceMaps: false, //projeyi paylaşırken kodların görünmesini engelliyor
};
