import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const ToggleButton = styled(motion.button)`
  position: fixed;
  height: 50px;
  width: 50px;

  top: 1.5rem;
  left: 1.5rem;

  z-index: 10;

  border-radius: 25%;
  border: none;
  outline: none;
  cursor: pointer;

  /* background: linear-gradient(to bottom right, #ff008c 0%, #d309e1 100%); */
  background: linear-gradient(to bottom right, #9c1aff, #ff008c);

  box-shadow: 0px 3px 15px #ff008c;

  padding: 3px;

  @media ${Device.min.Tablet} {
    height: 60px;
    width: 60px;

    top: 2rem;
    left: 2rem;
  }

  @media ${Device.min.Desktop} {
    height: 70px;
    width: 70px;

    top: 3rem;
    left: 3rem;
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
        variants={{
          closed: {
            boxShadow: "0px 3px 15px rgba(255, 0, 140, 0.3)",
            background:
              // `linear-gradient(to bottom right, #ff008c, #d309e1)`,
              `linear-gradient(to bottom right, #9C1AFF, #FF008C)`,
          },
          open: {
            boxShadow: "0px 3px 15px rgba(0,0,0,0.0)",
            background: `linear-gradient(to bottom right, rgb(0,0,0,0), rgb(0,0,0,0))`,
          },
        }}
      >
        <Svg>
          <Path
            variants={{
              closed: { d: "M 5 7.5 L 30 7.5", stroke: "white" },
              open: { d: "M 5 30 L 30 5", stroke: "white" },
            }}
            transition={{}}
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
              closed: { d: "M 5 27.5 L 30 27.5", stroke: "white" },
              open: { d: "M 5 5 L 30 30", stroke: "white" },
            }}
          />
        </Svg>
      </ToggleButton>
  )
}

export default MenuToggle
