import React from "react"
import { Helmet } from "react-helmet"

// global CSS here
import "./../styles/tailwind.css"
import "./../styles/main.css"

// global JS here

const Layout = (props) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Marlon Buella | Backend Developer</title>
      <link rel="canonical" href="https://mbuella.com" />
      <body class="bg-mbuella-gray-900" />
    </Helmet>
    <main class="text-lg">{props.content}</main>
  </React.Fragment>
)

export default Layout