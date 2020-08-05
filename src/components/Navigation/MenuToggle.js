import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"

const ToggleButton = styled(motion.button)`
  position: fixed;

  top: 1.5rem;
  left: 1.5rem;

  z-index: 10;

  border-radius: 25%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  padding: 0;

  @media ${Device.min.Tablet} {
    top: 2rem;
    left: 2rem;
  }

  @media ${Device.min.Desktop} {
    top: 3rem;
    left: 3rem;
  }
`

const Svg = styled.svg`
  width: 50px;
  height: 50px;

  display: block;
  margin: auto;
`

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="5"
    // stroke="hsl(0, 0%, 18%)"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
)

// ANIMATION VARIANTS

const MenuToggle = ({ toggle }) => {
  return (
    <ToggleButton
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Svg>
        <Path
          variants={{
            closed: { d: "M 7.5 12.5 42.5 12.5", stroke: "white" },
            open: { d: "M 10 40 L 40 10", stroke: "white" },
          }}
          transition={{}}
        />
        <Path
          d="M 15 25 42.5 25"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 7.5 37.5 42.5 37.5", stroke: "white" },
            open: { d: "M 10 10 L 40 40  ", stroke: "white" },
          }}
        />
      </Svg>
    </ToggleButton>
  )
}

export default MenuToggle
