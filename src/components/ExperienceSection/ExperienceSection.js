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
import Experience from "./Experience"

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

  margin-bottom: 2rem;

  background-image: linear-gradient(135deg, #28c76f, #81fbb8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Device.min.Laptop} {
    max-width: 500px;
  }
`

const ExperienceSection = ({ experienceList }) => {

  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const elementVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }

  var transDelay = 0.5

  const renderExperienceList = experienceList.map(item => {
    return (
      <Experience
        transDelay={(transDelay += 0.25)}
        key={item.key}
        experienceObject={item}
      />
    )
  })


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
              {renderExperienceList}
            </JobGridContainer>
          </ResponsiveContainer>
        </SectionResponsiveLayout>
      </motion.div>
    </PortfolioSection>
  )
}

export default ExperienceSection
