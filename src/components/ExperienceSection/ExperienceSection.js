import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styled from "styled-components"

import Device from "../../utils/Device"
import Scribble from "../Text/Scribble"
import SectionResponsiveLayout from "../layout/SectionResponsiveLayout"
import PortfolioSection from "../layout/PortfolioSection"

const ResponsiveContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: 100%;
`

const JobGridContainer = styled(motion.div)`
  width: 100%;
`

const JobItem = styled(motion.div)`
  display: inline-grid;

  align-items: center;
  justify-items: center;

  width: 100%;

  grid-template-columns: 30% 70%;
`

const TitleContainer = styled(motion.div)`
  text-align: left;
  margin-bottom: 2rem;
  width: 100%;
`

const AboutHeading = styled(motion.h1)`
  text-align: left;
  max-width: 400px;
  font-size: 1.5rem;

  margin-bottom: 2rem;

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
        mobileAboutImage: file(relativePath: { eq: "about-img-sqr.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [data.mobileAboutImage.childImageSharp.fluid]

  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3 })

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
              Places that helped me grow professionaly.
            </AboutHeading>

            <JobGridContainer>
              <JobItem
                variants={elementVariants}
                transition={{ duration: 0.5, delay: 0.50 }}
              >
                {" "}
                <span>IMAGE</span>
                <span>Desc</span>
              </JobItem>
              <JobItem
                variants={elementVariants}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                {" "}
                <span>IMAGE</span>
                <span>Desc</span>
              </JobItem>
            </JobGridContainer>
          </ResponsiveContainer>
        </SectionResponsiveLayout>
      </motion.div>
    </PortfolioSection>
  )
}

export default ExperienceSection
