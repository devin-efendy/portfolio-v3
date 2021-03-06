module.exports = {
  siteMetadata: {
    title: `Devin Efendy`,
    description: `Devin Efendy's web portfolio`,
    author: `@gdevinefendy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: `markdown-data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devin Efendy Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/LogoDE128.png`, // This path is relative to the root of the site.
      },
    },

    // Styled Components
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // Typhograpgy.js
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Reenie Beanie\:400`],
        // display: 'swap'
      },
    },
  ],
}
