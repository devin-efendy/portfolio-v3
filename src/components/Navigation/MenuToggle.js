import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"

const ToggleButton = styled(motion.button)`
  position: fixed;
  height: 50px;
  width: 50px;

  top: 2rem;
  left: 1rem;

  z-index: 10;

  border-radius: 10px;
  border: none;
  outline: none;
  background: linear-gradient(to bottom left, #feac5e, #c779d0, #4bc0c8);

  box-shadow: 2px 2px 3px #999;

  padding: 3px;

  @media ${Device.min.Tablet} {
    height: 60px;
    width: 60px;
  }

  @media ${Device.min.LaptopL} {
    height: 70px;
    width: 70px;

    top: 3rem;
    left: 2rem;
  }
`

const Svg = styled.svg`
  width: 35px;
  height: 35px;

  display: block;
  margin: auto;
`

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="5"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

// ANIMATION VARIANTS

const MenuToggle = ({ toggle }) => {
  return (
    <ToggleButton
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Svg>
        <Path
          variants={{
            closed: { d: "M 5 7.5 L 30 7.5" },
            open: { d: "M 5 30 L 30 5" },
          }}
        />
        <Path
          d="M 5 17.5 L 30 17.5"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 5 27.5 L 30 27.5" },
            open: { d: "M 5 5 L 30 30" },
          }}
        />
      </Svg>
    </ToggleButton>
  )
}

export default MenuToggle
