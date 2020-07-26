import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import TablerIcon from "../../utils/TablerIcon"
import Device from "../../utils/Device"
import Colors from "../../utils/ColorPallate"

const MotionLi = styled(motion.li)`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const MotionA = styled(motion.a)`
  background: none !important;
  text-shadow: none !important;
  background-image: none !important;

  font-weight: 900;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    width: 25px;
    height: 25px;
  }

  :hover {
    background-image: none !important;
    text-decoration: none;
    text-decoration-color: #4bc0c8;

    cursor: pointer;
  }
`

const liVariants = {
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

const svgVariant = {
  rest: {
    stroke: "#ffffff",
    transition: {
      // duration: 0.1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    stroke: `#8954ff`,
    transition: {
      // duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
}

const textVariant = {
  rest: {
    color: "#ffffff",
    transition: {
      // duration: 0.1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: `#8954ff`,
    transition: {
      // duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
}

const MenuItem = ({ i }) => {
  // const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

  const icons = [
    homeIcon(),
    userIcon(),
    toolsIcon(),
    bracesIcon(),
    laptopIcon(),
    phoneIcon(),
  ]

  const navText = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ]

  return (
    <MotionLi variants={liVariants} whileTap={{ scale: 0.95 }}>
      <MotionA
        // style={{ color: `${colors[i]}` }}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <span>{icons[i]}</span>
        <motion.span variants={textVariant}>{navText[i]}</motion.span>
      </MotionA>
    </MotionLi>
  )
}

const homeIcon = () => {
  return <TablerIcon.HomeIcon variants={svgVariant} />
}
const userIcon = () => {
  return <TablerIcon.UserIcon variants={svgVariant} />
}
const toolsIcon = () => {
  return <TablerIcon.ToolsIcon variants={svgVariant} />
}
const bracesIcon = () => {
  return <TablerIcon.BracesIcon variants={svgVariant} />
}
const laptopIcon = () => {
  return <TablerIcon.LaptopIcon variants={svgVariant} />
}
const phoneIcon = () => {
  return <TablerIcon.PhoneIcon variants={svgVariant} />
}

export default MenuItem
