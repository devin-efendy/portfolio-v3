import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styled from "styled-components"

import Device from "../../utils/Device"
import SectionResponsiveLayout from "../layout/SectionResponsiveLayout"
import PortfolioSection from "../layout/PortfolioSection"
import Project from "./Project"

const ResponsiveContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  @media ${Device.min.FHD} {
  }
`

const ShowcaseContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
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

  margin-bottom: 1.5rem;

  background-image: linear-gradient(135deg, #7367f0 10%, #ce9ffc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Device.min.Laptop} {
    max-width: 500px;
  }
`

const ProjectSection = ({ projectList }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const elementVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }

  var projectDelay = 0.25

  const renderProjectList = projectList.map(project => {
    return (
      <Project
        transDelay={(projectDelay += 0.25)}
        key={project.key}
        projectObject={project}
      />
    )
  })

  return (
    <PortfolioSection id="projects">
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
              <motion.h3>projects</motion.h3>
            </TitleContainer>

            <AboutHeading
              variants={elementVariants}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              These are things that I have built. I think the best way to learn is to build something.
            </AboutHeading>

            <ShowcaseContainer>{renderProjectList}</ShowcaseContainer>
          </ResponsiveContainer>
        </SectionResponsiveLayout>
      </motion.div>
    </PortfolioSection>
  )
}

export default ProjectSection
