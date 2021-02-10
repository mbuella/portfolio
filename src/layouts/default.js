import React from "react"
import SEO from '../components/seo'

// fonts
import "@fontsource/nunito"
import "@fontsource/raleway/500.css"

// global CSS here
import "./../styles/tailwind.css"
import "./../styles/main.css"

// global JS here

const Layout = (props) => (
  <React.Fragment>
    <SEO title={props.pageTitle}/>
    <main class="mx-5">
      {props.children}
    </main>
  </React.Fragment>
)

export default Layout