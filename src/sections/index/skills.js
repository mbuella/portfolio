import React from "react"
import Meter from "../../components/meter"

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" class="text-center pt-12">
      <h2>My Skills</h2>
      <div class="max-w-3xl mx-auto mt-8 lg:space-x-6 space-y-6 lg:space-y-0 flex flex-col lg:flex-row">
        <div class="w-full mx-auto bg-mbuella-gray-800 bg-opacity-50 px-5 py-8 rounded-lg">  
          <div class="lg:h-16 flex items-center justify-center">
            <h3>Programming Languages</h3>
          </div>
          {skills.progLang.map((skill) =>
          <div class="mt-6 text-left">
            <h4>{skill.name}</h4>
            <Meter rate={skill.rate} />
          </div>
          )}
        </div>
        <div class="w-full mx-auto bg-mbuella-gray-800 bg-opacity-50 px-5 py-8 rounded-lg">  
          <div class="lg:h-16 flex items-center justify-center">
            <h3>Frameworks</h3>
          </div>
          {skills.frameworks.map((skill) =>
          <div class="mt-6 text-left">
            <h4>{skill.name}</h4>
            <Meter rate={skill.rate} />
          </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection