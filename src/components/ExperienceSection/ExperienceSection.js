import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styled from "styled-components"

import Device from "../../utils/Device"
// import Scribble from "../Text/Scribble"
import SectionResponsiveLayout from "../layout/SectionResponsiveLayout"
import PortfolioSection from "../layout/PortfolioSection"

const ResponsiveContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  max-width: 800px;

  @media ${Device.min.FHD} {
    max-width: 900px;
  }
`

const JobGridContainer = styled(motion.div)`
  width: 100%;

  a {
    color: #abdcff;
  }

  a:hover {
    text-decoration: underline;
  }
`

const JobItem = styled(motion.div)`
  display: inline-grid;

  align-items: center;
  justify-items: center;

  width: 100%;

  margin: 1.5rem 0;

  grid-template-columns: 100px auto;
  grid-template-rows: auto auto auto;
`

const JobCompanyLogo = styled(motion.custom(Img))`
  grid-column: 1;
  grid-row: 1/3;
  width: 50px;
  // height: 100%;
`

const JobTitle = styled(motion.h3)`
  grid-column: 2;
  grid-row: 1;

  font-size: 1rem;

  justify-self: start;
`

const JobDuration = styled(motion.p)`
  grid-column: 2;
  grid-row: 2;

  justify-self: start;
`

const JobDesc = styled(motion.p)`
  color: rgba(255, 255, 255, 0.65);

  grid-column: 2;
  grid-row: 3;
  justify-self: start;

  padding-top: 0.7rem;

  font-size: 18px;
`

const TitleContainer = styled(motion.div)`
  text-align: left;
  margin-bottom: 2rem;
  width: 100%;
`

const AboutHeading = styled(motion.h1)`
  text-align: left;
  /* max-width: 400px; */
  font-size: 1.5rem;

  margin-bottom: 1.5rem;

  background-image: linear-gradient(135deg, #28c76f 10%, #81fbb8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Device.min.Laptop} {
    max-width: 500px;
  }
`

const ExperienceSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        boldLogo: file(relativePath: { eq: "logo/bold-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        umLogo: file(relativePath: { eq: "logo/um-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const boldLogo = [data.boldLogo.childImageSharp.fluid]
  const umLogo = [data.umLogo.childImageSharp.fluid]

  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      console.log("[#experience]: in-view")
    }
  }, [controls, inView])

  const elementVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }

  return (
    <PortfolioSection id="experience">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        style={{ width: "100%" }}
      >
        <SectionResponsiveLayout>
          <ResponsiveContainer>
            <TitleContainer
              variants={elementVariants}
              transition={{ duration: 0.5 }}
            >
              <motion.h3>work experience</motion.h3>
            </TitleContainer>

            <AboutHeading
              variants={elementVariants}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              I have the desire to grow professionally and eager to learn from
              the industry experts.
            </AboutHeading>

            <JobGridContainer>
              <JobItem
                variants={elementVariants}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <JobCompanyLogo fluid={boldLogo} />
                <JobTitle>
                  Software Developer Co-op at{" "}
                  <a href="https://boldcommerce.com/" target="_blank">
                    Bold Commerce
                  </a>
                </JobTitle>
                <JobDuration>May 2020 - August 2020</JobDuration>
                <JobDesc>
                  At Bold, I was working in Checkout Plugin & API team. The team
                  develops plugin features and API endpoints for{" "}
                  <a href="https://boldcommerce.com/checkout" target="_blank">
                    Bold Checkout
                  </a>
                  . One of my important resposibility is to maintain Bold's
                  Social Discount plugin which is a plugin that gives customer
                  discount when they share their purchases to Facebook or
                  Twitter. The technologies that I used are PHP/Laravel,
                  JavaScript, MySQL, and Docker.
                </JobDesc>
              </JobItem>
              <JobItem
                variants={elementVariants}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <JobCompanyLogo fluid={umLogo} />
                <JobTitle>
                  Teaching Assistant at{" "}
                  <a href="https://www.sci.umanitoba.ca/cs/" target="_blank">
                    University of Manitoba
                  </a>
                </JobTitle>
                <JobDuration>September 2019 - December 2019</JobDuration>
                <JobDesc>
                  I conducted lab sessions and guided students to understand lab
                  materials and to solve lab assignments while ensuring best
                  programming practices. Additionaly, I helped student with C
                  and UNIX.
                </JobDesc>
              </JobItem>
            </JobGridContainer>
          </ResponsiveContainer>
        </SectionResponsiveLayout>
      </motion.div>
    </PortfolioSection>
  )
}

export default ExperienceSection
