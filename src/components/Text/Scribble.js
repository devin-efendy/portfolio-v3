import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"

const Text = styled(motion.span)`
  display: inline-block;
  
  font-family: "Reenie Beanie", cursive;
  color: gray;
  font-size: 1rem;

  @media ${Device.min.Tablet} {
    font-size: 1.3rem;
  }

  @media ${Device.min.LaptopL} {
    font-size: 1.5rem;
  }
`

const Scribble = ({ style, animate, transition, children }) => {
  return (
    <Text style={style} animate={animate} transition={transition}>
      {children}
    </Text>
  )
}

export default Scribble
