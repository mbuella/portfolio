import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../../static/favicon.ico"

const SEO = ({ title, metas, links }) => {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultMetas,
    defaultLinks
  } = site.siteMetadata
  
  const seo = {
    title: title || defaultTitle,
    metas: Object.assign(defaultMetas, metas),
    links: Object.assign(defaultLinks, links),
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} meta={seo.metas} link={seo.links}>
      <body class=" bg-mbuella-gray-900  text-mbuella-gray-400 text-lg" />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  metas: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.arrayOf(PropTypes.object),
}

SEO.defaultProps = {
  title: null,
  metas: [],
  links: [
    { rel: 'icon', href: favicon }
  ]
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultMetas: metas {
          name
          content
        }
        defaultLinks: links {
          rel
          href
        }
      }
    }
  }
`