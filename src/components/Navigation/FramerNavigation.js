import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"

const MotionNav = styled(motion.nav)``

const Bg = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: blue;
`

const sideBar = {
  open: {},
  closed: {},
}

const FramerNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <MotionNav initial={false} animate={isOpen ? "open" : "closed"}>
      {/* <Bg className="background" variants={sideBar} /> */}
      <MenuToggle
        toggle={() => {
          toggleOpen()
        }}
      />
    </MotionNav>
  )
}

export default FramerNavigation
