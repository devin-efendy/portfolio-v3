import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const MotionLi = styled(motion.li)`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

const MotionA = styled(motion.a)`
  background: none !important;
  text-shadow: none !important;
  background-image: none !important;

  :hover {
    background-image: none !important;
    text-decoration: none;
    text-decoration-color: #4bc0c8;

    cursor: pointer;
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

const MenuItem = ({ i }) => {
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]
  const navText = ["Home", "About", "Skills", "Works", "Contact"];

  return (
    <MotionLi
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MotionA style={{color: `${colors[i]}`}}>{navText[i]}</MotionA>
    </MotionLi>
  )
}

export default MenuItem
