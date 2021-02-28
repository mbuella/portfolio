import React from "react"
import Img from "gatsby-image"

const WorksSection = ({ works }) => {
  return (
    <section id="works" class="text-center pt-12">
      <h2>My Works</h2>
      <div class="max-w-3xl mt-2 mx-auto flex flex-col lg:flex-row lg:flex-wrap">
        { works.map((work) => (
          <div class="item bg-mbuella-gray-800 bg-opacity-75 rounded-lg w-full mt-6 lg:odd:mr-3 lg:even:ml-3">
            <Img className="rounded-t-lg" alt={work.title} fluid={work.image.childImageSharp.fluid} />
            <div class="px-5 py-6 text-left">
              <h3 class="text-center mb-3">{work.title}</h3>
              <p>{work.description}</p>
              <div class="text-center mt-5 space-x-5">
                <a href={work.githubUrl} class="text-mbuella-fuchsia-600" rel="nofollow" target="_blank">Source</a>
                <a href={work.link} class="button-small" rel="nofollow" target="_blank">View</a>
              </div>
            </div>
            {/* <a href="#">
              <Img className="rounded-lg border-2 border-mbuella-gray-700" alt={work.title} fluid={work.image.childImageSharp.fluid} />
            </a> */}
          </div>
        )) }
      </div>
    </section>
  )
}

export default WorksSection