import React from "react"
import Img from "gatsby-image"

const WorksSection = ({ works }) => {
  return (
    <section id="works" class="text-center pt-12">
      <h2>My Works</h2>
      <div class="max-w-3xl mt-2 mx-auto flex flex-col lg:flex-row lg:flex-wrap">
        { works.map((work) => (
          <div class="w-full lg:w-1/2 mx-auto mt-6 lg:odd:pr-3 lg:even:pl-3">
            <a href="#">
              <Img className="rounded-lg border-2 border-mbuella-gray-700" alt={work.title} fluid={work.image.childImageSharp.fluid} />
            </a>
          </div>
        )) }
      </div>
    </section>
  )
}

export default WorksSection