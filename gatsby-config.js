const React = require("react");
module.exports = {
  siteMetadata: {
    title: `MP3Paw`,
    description: `MP3 Paw is Free MP3 Music Download in 320kbps High Quality. it's Popular and Essy to use MP3 Download.`,
    author: `@gatsbyjs`,
    siteUrl: `https://mp3paw.mobi/`,
  },

  developMiddleware: app => {
    app.use((req, res, next) => {
      // Check if the request is for the root domain
      if (req.url === '/ar2/') {
        // Redirect to the desired URL with a 301 status code
        res.writeHead(301, { Location: '/ar3/' });
        res.end();
      } else {
        // Continue to the next middleware
        next();
      }
    });
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
          `/en`,
          `/en2`,
          `/en3`,
          `/en9`,
          `/en10`,
          `/en50`,
          `/en101`,
          `/404`,
          `/mp3-download`,
          `/ar`,
          `/bn`,
          `/de`,
          `/es`,
          `/fr`,
          `/hi`,
          `/id`,
          `/it`,
          `/ja`,
          `/ko`,
          `/ms`,
          `/my`,
          `/pt`,
          `/ru`,
          `/th`,
          `/tl-ph`,
          `/tr`,
          `/vi`,
          `/zh-cn`,
          `/zh-tw`,
          `/zu`,
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
