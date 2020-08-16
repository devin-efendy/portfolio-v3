import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styled from "styled-components"

import Device from "../../utils/Device"

const SectionWrapper = styled(motion.section)`
  background: #1b1b1b;
  /* display: flex; */

  padding: 5rem 0;

  justify-content: center;
`
const PortfolioSection = ({ id, children }) => {
  return <SectionWrapper id={id}>{children}</SectionWrapper>
}

export default PortfolioSection
