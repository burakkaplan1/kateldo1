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
  productionBrowserSourceMaps: false, //projeyi paylaşırken kodların görünmesini engelliyor
};
