import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import TablerIcon from "../../utils/TablerIcon"
import Device from "../../utils/Device"
import { Link } from "react-scroll"

const MotionLi = styled(motion.li)`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const MotionA = styled(motion.span)`
  background: none !important;
  text-shadow: none !important;
  background-image: none !important;

  color: #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    width: 30px;
    height: 30px;
  }

  font-size: 1rem;

  :hover {
    background-image: none !important;
    text-decoration: none;
    text-decoration-color: #4bc0c8;

    cursor: pointer;
  }

  @media ${Device.min.LaptopXL} {
    svg {
      width: 30px;
      height: 30px;
    }
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
    stroke: "rgba(255,255,255,0.65)",
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
  hover: {
    stroke: "rgba(255,255,255,1)",
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
}

const textVariant = {
  rest: {
    color: "rgba(255,255,255,0.65)",
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
  hover: {
    color: "rgba(255,255,255,1)",
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
}

const MenuItem = ({ i, toggle }) => {
  // const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

  const icons = [
    homeIcon(),
    userIcon(),
    laptopIcon(),
    bracesIcon(),
    phoneIcon(),
  ]

  const navText = ["Home", "About", "Experience", "Projects", "Contact"]

  return (
    <MotionLi variants={liVariants} whileTap={{ scale: 0.95 }}>
      <Link to={navText[i].toLowerCase()} spy={true} smooth={true}>
        <MotionA
          // style={{ color: `${colors[i]}` }}
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => {
            toggle()
          }}
        >
          <span>{icons[i]}</span>
          <motion.span variants={textVariant}>{navText[i]}</motion.span>
        </MotionA>
      </Link>
    </MotionLi>
  )
}

const homeIcon = () => {
  return <TablerIcon.HomeIcon variants={svgVariant} />
}
const userIcon = () => {
  return <TablerIcon.UserIcon variants={svgVariant} />
}
// const toolsIcon = () => {
//   return <TablerIcon.ToolsIcon variants={svgVariant} />
// }
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
