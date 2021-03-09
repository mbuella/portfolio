/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "",
    titleSuffix: "Marlon Buella · Backend Web Developer",
    htmlAttributes: { lang: 'en' },
    metas: [
      { name: 'description', content: "A passionate web developer, helping companies build highly converting websites."},
      { name: 'keywords', content: "Full Stack Developer, Backend Web Developer, PHP Developer, Drupal 8 Developer" }
    ],
    links: [
      { rel: 'canonical', href: "https://mbuella.com" }
    ],
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'data'),
      }
    },
    'gatsby-plugin-react-svg',
    'gatsby-plugin-preact',
    'gatsby-plugin-postcss',
  ],
  mapping: {
    "PostsYaml.author": "AuthorsYaml.uname",
  },
}
