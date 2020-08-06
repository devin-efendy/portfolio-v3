import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"
import MenuItem from "./MenuItem"

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const Sidebar = styled(motion.ul)`
  background-color: #141414;
  height: 100vh;
  width: 100vw;
  margin: 0;

  z-index: 10;
  /* padding: 0 5rem; */

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;

  @media ${Device.min.Tablet} {
    width: 300px;
  }

  @media ${Device.min.LaptopXL} {
    width: 400px;
  }

  @media ${Device.min.Desktop} {
    width: 500px;
  }
`

const variants = {
  open: {
    x: "0",
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      x: { stiffness: 1000 },
    },
  },
  closed: {
    x: "-100%",
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1,
      x: { stiffness: 1000 },
    },
  },
}

const NavigationSidebar = () => {
  const itemIds = [0, 1, 2, 3, 4, 5]

  return (
    <Sidebar variants={variants}>
      <motion.div style={{zIndex: 10}}>
        {itemIds.map(i => (
          <MenuItem i={i} key={i} />
        ))}
      </motion.div>
    </Sidebar>
  )
}

export default NavigationSidebar
