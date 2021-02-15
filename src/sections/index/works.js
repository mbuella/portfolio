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
      {/* <div class="max-w-3xl mx-auto mt-8 bg-mbuella-gray-800 bg-opacity-50 px-5 lg:px-8 py-10 rounded-lg">  
        <Img alt="Marlon Buella" className="block h-auto w-full" fixed={photo} />
        <div
          class="text-left mt-6 space-y-3"
          dangerouslySetInnerHTML={{ __html: aboutText }}
        />
        <a href={resumeFilePath} target="__blank" rel="nofollow" class="button-primary mt-6">View my Resume</a>
      </div> */}
    </section>
  )
}

export default WorksSection