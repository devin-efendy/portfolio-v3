import React from "react"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import styled from "styled-components"
import Device from "../../utils/Device"

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

const elementVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}

const Experience = ({ experienceObject, transDelay }) => {
  const {
    companyName,
    companyLink,
    companyLogo,
    position,
    timeStart,
    timeEnd,
    description,
    imageSharp,
    html,
  } = experienceObject

  return (
    <JobItem
      variants={elementVariants}
      transition={{ duration: 0.5, delay: transDelay}}
    >
      <JobCompanyLogo fluid={imageSharp} />
      <JobTitle>
        {position} at{" "}
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
        >
          {companyName}
        </a>
      </JobTitle>
      <JobDuration>{timeStart} - {timeEnd}</JobDuration>
      <JobDesc dangerouslySetInnerHTML={{ __html: html }} />
    </JobItem>
  )
}

export default Experience
