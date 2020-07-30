import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Text = styled(motion.p)`
  font-family: "Reenie Beanie", cursive;
  color: gray;
  font-size: 1.3rem;
`

const Scribble = ({style, animate, transition, children}) => {
  return (
    <Text style={style} animate={animate} transition={transition}>
      {children}
    </Text>
  );
}


export default Scribble;