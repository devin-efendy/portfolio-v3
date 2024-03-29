import * as React from 'react'
import { motion, useCycle } from 'framer-motion'
import styled from 'styled-components'
import MenuToggle from './MenuToggle'
import NavigationSidebar from './NavigationSidebar'

const Nav = styled(motion.nav)`
  position: fixed;
  width: 0;
  z-index: 10;
`

const FramerNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <Nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <MenuToggle
        toggle={() => {
          toggleOpen()
        }}
      />
      <NavigationSidebar
        toggle={() => {
          toggleOpen()
        }}
      />
    </Nav>
  )
}

export default FramerNavigation
