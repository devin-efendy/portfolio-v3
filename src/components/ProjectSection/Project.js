import React from "react"
import Img from "gatsby-image"

import { motion } from "framer-motion"

import styled from "styled-components"

import Device from "../../utils/Device"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faReact,
  faAndroid,
  faAws,
  faDocker,
  faJava,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons"

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 3rem 0;

  @media ${Device.min.Laptop} {
    flex-direction: row;
  }
`

const ProjectImage = styled(motion.custom(Img))`
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;

  @media ${Device.min.Laptop} {
    // width: 70%;
    margin-right: 3rem;
  }
`

const ProjectDetails = styled(motion.div)`
  width: 100%;
`

const ProjectTitle = styled(motion.h1)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const ProjectDescription = styled(motion.div)`
  margin-bottom: 2rem;
  font-size: 18px;

  p {
    color: rgba(255, 255, 255, 0.65);
  }

  a {
    color: #abdcff;
  }

  a:hover {
    text-decoration: underline;
  }
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-direction: row;
`

const ButtonForm = styled(motion.form)`
  font-size: 18px;
`

const SourceButton = styled(motion.button)`
  background-image: linear-gradient(135deg, #7367f0 10%, #ce9ffc 100%);
  color: white;

  border: none;
  outline: none;
  cursor: pointer;

  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(206, 159, 252, 0.45);

  padding: 0.4em 1.5rem;

  font-size: 18px;
  font-weight: bold;

  text-align: center;
`

const DemoButton = styled(motion.button)`
  margin-right: 1rem;

  background: white;
  color: rgba(0, 0, 0, 0.65);

  border: none;
  outline: none;
  cursor: pointer;

  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.45);

  padding: 0.4rem 1rem;

  font-size: 18px;
  font-weight: bold;

  text-align: center;
`

const TechGroup = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const Tech = styled(motion.div)`
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`

const elementVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}

const Project = ({ projectObject, transDelay }) => {
  const { title, tech, demo, source, imageSharp, html } = projectObject

  const techList = tech.map(i => {
    return <Tech key={i}>{getTechIcon(i)}</Tech>
  })

  return (
    <motion.div variants={elementVariants} transition={{ duration: 0.5, delay: transDelay }}>
      <ProjectContainer>
        <ProjectImage fluid={imageSharp} />
        <ProjectDetails>
          <ProjectTitle>{title}</ProjectTitle>
          <TechGroup>{techList}</TechGroup>
          <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
          <ButtonGroup>
            <ButtonForm
              whileHover={{ y: -3 }}
              action={demo}
              target="_blank"
              method="get"
            >
              <DemoButton>
                <FontAwesomeIcon icon={faDesktop} />
                &nbsp;&nbsp;Demo
              </DemoButton>
            </ButtonForm>
            <ButtonForm
              whileHover={{ y: -3 }}
              action={source}
              target="_blank"
              method="get"
            >
              <SourceButton>
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;&nbsp;GitHub
              </SourceButton>
            </ButtonForm>
          </ButtonGroup>
        </ProjectDetails>
      </ProjectContainer>
    </motion.div>
  )
}

const getTechIcon = str => {
  switch (str) {
    case "js":
      return <FontAwesomeIcon icon={faJs} size="lg" />
    case "html":
      return <FontAwesomeIcon icon={faHtml5} size="lg" />
    case "css":
      return <FontAwesomeIcon icon={faCss3} size="lg" />
    case "bootstrap":
      return <FontAwesomeIcon icon={faBootstrap} size="lg" />
    case "react":
      return <FontAwesomeIcon icon={faReact} size="lg" />
    case "aws":
      return <FontAwesomeIcon icon={faAws} size="lg" />
    case "docker":
      return <FontAwesomeIcon icon={faDocker} size="lg" />
    case "android":
      return <FontAwesomeIcon icon={faAndroid} size="lg" />
    case "java":
      return <FontAwesomeIcon icon={faJava} size="lg" />
    default:
      return str
  }
}

export default Project
