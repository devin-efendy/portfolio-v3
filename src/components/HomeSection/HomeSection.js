import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"
import Scribble from "../Text/Scribble"

const SectionWrapper = styled(motion.section)`
  background: #1b1b1b;
  display: flex;
  height: 100vh;

  align-items: center;
  justify-content: center;
`

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  width: 100%;
`

const HeaderText = styled(motion.h1)`
  text-align: center;
  font-size: 2rem;

  opacity: 0;

  @media ${Device.min.Tablet} {
    font-size: 3rem;
  }

  @media ${Device.min.LaptopL} {
    font-size: 4rem;
  }
`

const NameHighlight = styled(motion.span)`
  background-image: linear-gradient(135deg, #0396ff 40%, #abdcff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const IntroText = styled(motion.p)`
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  text-align: center;
  color: rgba(255, 255, 255, 0.75);

  opacity: 0;

  padding: 0 2rem;

  @media ${Device.min.Tablet} {
    font-size: 1rem;
  }

  @media ${Device.min.LaptopL} {
    font-size: 1.3rem;
    margin-bottom: 4rem;
  }
`

const ExploreButton = styled(motion.button)`
  width: 140px;
  height: 40px;

  outline: none;
  border: none;
  border-radius: 25rem;
  cursor: pointer;

  background: #0396ff;
  box-shadow: 0px 3px 15px rgba(3, 150, 255, 0.45);

  margin-bottom: 0.5rem;
  padding: 0 1rem;

  color: white;

  @media ${Device.min.Tablet} {
    width: 160px;
    height: 45px;
  }

  @media ${Device.min.LaptopL} {
    width: 190px;
    height: 50px;
    font-size: 1.25rem;
  }
`

const HomeSection = () => {
  return (
    <SectionWrapper id="home">
      <Container>
        <motion.div>
          <Scribble
            style={{
              marginBottom: "1rem",
              textAlign: "left",
              marginTop: "0.5rem 0",
              opacity: "0",
            }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
          >
            Oh look! Someone is here
          </Scribble>
          <HeaderText
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
          >
            <motion.span>Hi! My name is</motion.span> <br />
            <NameHighlight>DEVIN EFENDY.</NameHighlight>
          </HeaderText>
        </motion.div>

        {RenderIntroText()}

        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ExploreButton>Explore</ExploreButton>
        </motion.a>

        <Scribble
          style={{ marginTop: "1rem", opacity: "0" }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
        >
          let's explore together, shall we? ⤵
        </Scribble>
      </Container>
    </SectionWrapper>
  )
}

const RenderIntroText = () => {
  if (window.innerWidth >= 768) {
    return (
      <IntroText
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
      >
        I'm a third year computer science co-op student
        <br />
        at the University of Manitoba.
      </IntroText>
    )
  } else {
    return (
      <IntroText
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
      >
        I'm a third year computer science co-op student at the University of
        Manitoba.
      </IntroText>
    )
  }
}

export default HomeSection
