const React = require("react");
module.exports = {
  siteMetadata: {
    title: `MP3Paw`,
    description: `MP3 Paw is Free MP3 Music Download in 320kbps High Quality. it's Popular and Essy to use MP3 Download.`,
    author: `@gatsbyjs`,
    siteUrl: `https://mp3paw.mobi/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MP3 PAW`,
        short_name: `MP3 PAW`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favcon.svg`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        excludes: [
          `/`,
          `/404`,
          `/mp3-download`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-257217301-3",
      },
    }
  ],
}
