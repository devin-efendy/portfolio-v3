import React from 'react'

import { motion } from 'framer-motion'

import styled from 'styled-components'

import Device from '../../utils/Device'

const SectionWrapper = styled(motion.section)`
  background: #1f1f1f;
  display: flex;

  padding: 5rem 0;

  justify-content: center;
  align-items: center;

  @media ${Device.min.Laptop} {
    padding: 7rem 0;
  }

  @media ${Device.min.LaptopXL} {
    /* padding: 10rem 0; */
  }
`
const PortfolioSection = ({ id, style, children }) => {
  return (
    <SectionWrapper id={id} style={style}>
      {children}
    </SectionWrapper>
  )
}

export default PortfolioSection
