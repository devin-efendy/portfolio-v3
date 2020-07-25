import * as React from "react"
import { motion, useCycle } from "framer-motion"
// import styled from "styled-components"
import MenuToggle from "./MenuToggle"
import NavigationSidebar from "./NavigationSidebar"


const FramerNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <MenuToggle
        toggle={() => {
          toggleOpen()
        }}
      />
      <NavigationSidebar/>
      
    </motion.nav>
  )
}

export default FramerNavigation
