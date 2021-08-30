import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Device from '../../utils/Device'

const StyledHeader = styled(motion.h1)`
  color: white;
`

const Title = ({ style, animate, transition, children }) => {
  return (
    <StyledHeader style={style} animate={animate} transition={transition}>
      {children}
    </StyledHeader>
  )
}

export default Title
