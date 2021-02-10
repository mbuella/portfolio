import React from "react"
import { graphql } from "gatsby"
import Layout from "./../layouts/default"
import HeroSection from "./../sections/index/hero"
import AboutMeSection from "./../sections/index/aboutme"
import SkillsSection from "./../sections/index/skills"

// page specific css here

// page specific js here

const IndexPage = ({ data }) => {
  const { portfolio } = data.dataYaml

  return (
    <Layout>
      <HeroSection
        firstName={portfolio.firstName}
        lastName={portfolio.lastName}
        intro={portfolio.intro}
      />
      <AboutMeSection
        photo={portfolio.photo.childImageSharp.fixed}
        aboutText={portfolio.aboutText}
        resumeFilePath={portfolio.resumeFile.publicURL}
      />
      <SkillsSection
        skills={portfolio.skills}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    dataYaml {
      portfolio {
        firstName
        lastName
        intro
        photo {
          childImageSharp {
            fixed(width: 216) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        aboutText
        resumeFile {
          publicURL
        }
        skills {
          frameworks {
            name
            rate
          }
          progLang {
            name
            rate
          }
        }
      }
    }
  }
`