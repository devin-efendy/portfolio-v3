import * as React from "react"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

const SocialContainer = styled(motion.div)`
  display: none;

  position: fixed;
  right: 2rem;
  height: 100vh;

  margin: 0;

  @media ${Device.min.Tablet} {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  @media ${Device.min.LaptopL} {
    right: 3rem;
  }
`

const SocialLink = styled(motion.a)`
  margin-top: 1.5rem;
  font-size: 1.2rem;

  color: rgba(255, 255, 255, 0.65);

  @media ${Device.min.LaptopL} {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  @media ${Device.min.LaptopXL} {
    font-size: 2rem;
  }

  opacity: 0;
`

const LinkVariants = {
  hold: {
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
  start: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
}

const SocialVariants = {
  hold: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1.5,
    },
  },
  start: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1.5,
    },
  },
}

var mounted = false

const SocialNav = () => {
  return (
    <motion.div initial="hold" animate="start">
      <SocialContainer variants={SocialVariants}>
        <SocialLink whileHover={{ color: "#abdcff" }} variants={LinkVariants}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialLink>

        <SocialLink whileHover={{ color: "#abdcff" }} variants={LinkVariants}>
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>

        <SocialLink whileHover={{ color: "#abdcff" }} variants={LinkVariants}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </SocialLink>
      </SocialContainer>
    </motion.div>
  )
}

export default SocialNav
