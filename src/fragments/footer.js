import React from "react"
import { Link } from "gatsby"
import { ArrowNarrowUp } from "heroicons-react"

const Footer = () => (
  <footer class="mt-12">
    <div class="text-center lg:text-right mx-10">
      <Link class="text-mbuella-fuchsia-600" to="/">
        <ArrowNarrowUp class="inline" />
        <span class="underline">Back to top</span>
      </Link>
    </div>
    <div class="mt-8 bg-mbuella-gray-800 bg-opacity-75 text-center py-6">
      © {new Date().getFullYear()} Marlon Buella.
    </div>
  </footer>
)

export default Footer