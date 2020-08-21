import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styled from "styled-components"

import Device from "../../utils/Device"

const SectionWrapper = styled(motion.section)`
  background: #1b1b1b;
  display: flex;

  padding: 5rem 0;

  justify-content: center;
  align-items: center;

  @media ${Device.min.LaptopM} {
    padding: 7.5rem 0;
  }

  @media ${Device.min.LaptopXL} {
    padding: 10rem 0;
  }
`
const PortfolioSection = ({ id, style, children }) => {
  return <SectionWrapper id={id} style={style} >{children}</SectionWrapper>
}

export default PortfolioSection
