const businessInfos = require("../gatsby-theme-aumentados/package.json");
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-aumentados",
      options: {
        fonts: [
          businessInfos.importFont.font01,
          businessInfos.importFont.font02,
          businessInfos.importFont.font03,
          businessInfos.importFont.font04,
          businessInfos.importFont.font05,
        ],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aumentados`,
        short_name: `Aumentados`,
        start_url: `/`,
        background_color: `#011624`,
        theme_color: `#032741`,
        display: `standalone`,
        icon: `../gatsby-theme-aumentados/static/images/android-icon-192x192.png`,
      },
    },
  ],
};
