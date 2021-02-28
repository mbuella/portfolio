import React from "react"
import Img from "gatsby-image"

const AboutMeSection = ({ photo, aboutText, resumeFilePath }) => {
  return (
    <section id="aboutme" class="text-center pt-12">
      <h2>Who am I?</h2>
      <div class="max-w-3xl mx-auto mt-8 bg-mbuella-gray-800 bg-opacity-75 px-5 lg:px-8 py-10 rounded-lg">  
        <Img alt="Marlon Buella" className="block h-auto w-full" fixed={photo} />
        <div
          class="text-left mt-6 space-y-3"
          dangerouslySetInnerHTML={{ __html: aboutText }}
        />
        <a href={resumeFilePath} target="__blank" rel="nofollow" class="button-primary mt-6">View my Resume</a>
      </div>
    </section>
  )
}

export default AboutMeSection