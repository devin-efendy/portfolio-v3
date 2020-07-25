import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"
import MenuItem from "./MenuItem"

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const Sidebar = styled(motion.ul)`
  background-color: white;
  height: 100vh;
  width: 200px;
  margin: 0;

  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  list-style: none;

  @media ${Device.min.MobileM} {
    width: 300px;
  }

  @media ${Device.min.LaptopL} {
    width: 400px;
  }
`

const variants = {
  open: {
    x: '0',
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      x: { stiffness: 1000 },
    },
  },
  closed: {
    x: '-100%',
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1,
      x: { stiffness: 1000 },
    },
  },
}

const NavigationSidebar = () => {
  return (
    <Sidebar variants={variants}>
      <MenuItem>home</MenuItem>
      <MenuItem>about</MenuItem>
      <MenuItem>skills</MenuItem>
      <MenuItem>projects</MenuItem>
      <MenuItem>contacts</MenuItem>
    </Sidebar>
  )
}

export default NavigationSidebar
