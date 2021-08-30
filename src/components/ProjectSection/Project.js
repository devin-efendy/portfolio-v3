import React from 'react'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
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
} from '@fortawesome/free-brands-svg-icons'

import ReactTooltip from 'react-tooltip'

import styled from 'styled-components'
import Device from '../../utils/Device'

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
  font-size: 1.2rem;
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
  font-size: 1.3rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.65);
`

const elementVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}

const Project = ({ projectObject, transDelay }) => {
  const { title, tech, demo, source, imageSharp, html } = projectObject

  const techList = tech.map(i => {
    return (
      <Tech key={i} whileHover={{ color: 'rgba(255,255,255,1)' }}>
        {getTechIcon(i)}
      </Tech>
    )
  })

  return (
    <motion.div
      variants={elementVariants}
      transition={{ duration: 0.5, delay: transDelay }}
    >
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
  var selectedIcon = null
  var selectedString = ''
  switch (str) {
    case 'js':
      selectedIcon = faJs
      selectedString = 'JavaScript'
      break
    case 'html':
      selectedIcon = faHtml5
      selectedString = 'HTML'
      break
    case 'css':
      selectedIcon = faCss3
      selectedString = 'CSS'
      break
    case 'bootstrap':
      selectedIcon = faBootstrap
      selectedString = 'Bootstrap'
      break
    case 'react':
      selectedIcon = faReact
      selectedString = 'React'
      break
    case 'aws':
      selectedIcon = faAws
      selectedString = 'AWS Amplify'
      break
    case 'docker':
      selectedIcon = faDocker
      selectedString = 'Docker'
      break
    case 'android':
      selectedIcon = faAndroid
      selectedString = 'Android'
      break
    case 'java':
      selectedIcon = faJava
      selectedString = 'Java'
      break
    default:
      return str
  }

  return (
    <div>
      <FontAwesomeIcon
        icon={selectedIcon}
        size="lg"
        data-tip={selectedString}
      />
      <ReactTooltip effect="solid" border borderColor="#abdcff" while />
    </div>
  )
}

export default Project
