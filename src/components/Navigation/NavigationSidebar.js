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

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  border-radius: 0 50px 50px 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  list-style: none;

  @media ${Device.min.MobileM} {
    width: 250px;
  }

  @media ${Device.min.LaptopL} {
    width: 400px;
  }

  @media ${Device.min.Desktop} {
    width: 500px;
  }
`

const variants = {
  open: {
    x: "0",
    borderRadius: "0 50px 50px 0",
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      x: { stiffness: 1000 },
    },
  },
  closed: {
    x: "-100%",
    borderRadius: "0 0 0 0",
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1,
      x: { stiffness: 1000 },
      borderRadius: {
        duration: 0.2
      }
    },
  },
}

const NavigationSidebar = () => {
  const itemIds = [0, 1, 2, 3, 4]

  return (
    <Sidebar variants={variants}>
      {itemIds.map(i => (
        <MenuItem i={i} key={i} />
      ))}
    </Sidebar>
  )
}

export default NavigationSidebar
