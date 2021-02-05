import React from "react"
import SEO from '../components/seo'

// fonts
import "@fontsource/nunito"
import "@fontsource/raleway"

// global CSS here
import "./../styles/tailwind.css"
import "./../styles/main.css"

// global JS here

const Layout = ({ pageTitle, content }) => (
  <React.Fragment>
    <SEO title={pageTitle}/>
    <main class="mx-5">{content}</main>
  </React.Fragment>
)

export default Layout