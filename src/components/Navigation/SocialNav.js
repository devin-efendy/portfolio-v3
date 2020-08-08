import * as React from "react"
import { motion } from "framer-motion"
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

  width: 50px;

  margin: 0;

  @media ${Device.min.Tablet} {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  @media ${Device.min.Desktop} {
    right: 3rem;
  }
`

const SocialLink = styled(motion.a)`
  margin-top: 1.5rem;
  font-size: 1.2rem;

  color: rgba(255, 255, 255, 0.65);

  @media ${Device.min.Laptop} {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  @media ${Device.min.LaptopXL} {
    font-size: 1.7rem;
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
      delayChildren: 1.25,
    },
  },
  start: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1.25,
    },
  },
}

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
