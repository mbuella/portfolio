import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../../static/favicon.ico"

const SEO = ({ title, metas, links }) => {
  const { site } = useStaticQuery(query)

  const {
    titleSuffix,
    htmlAttributes,
    defaultMetas,
    defaultLinks
  } = site.siteMetadata
  
  const seo = {
    title: title || '',
    titleTemplate: `%s / ${titleSuffix}`,
    htmlAttributes: htmlAttributes || {},
    metas: Object.assign(defaultMetas, metas),
    links: Object.assign(defaultLinks, links),
  }

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate} defaultTitle={titleSuffix} meta={seo.metas} link={seo.links} htmlAttributes={seo.htmlAttributes}>
      <body class=" bg-mbuella-gray-900  text-mbuella-gray-400 text-lg" />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  htmlAttributes: PropTypes.object,
  metas: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.arrayOf(PropTypes.object),
}

SEO.defaultProps = {
  title: null,
  htmlAttributes: { lang: 'en' },
  metas: [],
  links: [
    { rel: 'icon', href: favicon }
  ]
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        titleSuffix,
        htmlAttributes {
          lang
        }
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