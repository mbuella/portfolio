import React from "react"
import { graphql } from "gatsby"
import Layout from "./../layouts/default"
import HeroSection from "./../sections/index/hero"
import AboutMeSection from "./../sections/index/aboutme"
import SkillsSection from "./../sections/index/skills"
import WorksSection from "./../sections/index/works"
import ContactSection from "./../sections/index/contact"

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
      <WorksSection
        works={portfolio.works}
      />
      <ContactSection
        address={portfolio.contact.address}
        email={portfolio.contact.email}
        mobile={portfolio.contact.mobile}
        tel={portfolio.contact.tel}
        social={portfolio.contact.social}
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
        works {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 372, maxHeight: 250, cropFocus: CENTER, sizes: "(max-width: 736px) 320px, 1280px", srcSetBreakpoints: [736,1280]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          description
          link
          githubUrl
        }
        contact {
          address
          email
          mobile
          tel
          social {
            id
            link
          }
        }
      }
    }
  }
`