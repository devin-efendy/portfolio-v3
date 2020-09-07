import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"

const Text = styled(motion.span)`
  display: inline-block !important;
  
  font-family: "Reenie Beanie", cursive !important;
  color: gray !important;

  font-size: 23px !important;

  @media ${Device.min.LaptopL} {
    font-size: 30px !important;
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
