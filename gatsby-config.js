module.exports = {
    siteMetadata: {
        siteUrl: `https://gatsbystarterliki.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/data/images/`,
          },
        },
      ],
}
