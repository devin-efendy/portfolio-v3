import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const MotionA = styled(motion.a)`
  background: none !important;
  text-shadow: none !important;
  background-image: none !important;

  :hover {
    background-image: none !important;
    text-decoration: underline;
    text-decoration-color: #4bc0c8;
  }
`

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuItem = ({ children }) => {
  // const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

  const style = { border: `2px solid #FF008C` }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MotionA>{children}</MotionA>
    </motion.li>
  )
}

export default MenuItem
