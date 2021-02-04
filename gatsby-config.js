/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'data'),
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-postcss',
  ],
  mapping: {
    "PostsYaml.author": "AuthorsYaml.uname",
  },
}
