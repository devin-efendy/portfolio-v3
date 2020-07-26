import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"
import Colors from "../../utils/ColorPallate"

const SectionWrapper = styled(motion.section)`
  background: linear-gradient(to bottom right, #191919 0%, #1b1b1b 100%);
  display: flex;
  height: 100vh;
  margin: 0 auto;

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
  background: linear-gradient(to bottom right, #8954ff 0%, #ff008c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const IntroText = styled(motion.p)`
  margin-top: 1.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);

  opacity: 0;

  @media ${Device.min.Tablet} {
    font-size: 1rem;
  }

  @media ${Device.min.LaptopL} {
    font-size: 1.3rem;
  }
`

const ExploreButton = styled(motion.button)`
  width: 150px;
  height: 50px;

  outline: none;
  border: none;
  border-radius: 25rem;
  cursor: pointer;

  background: linear-gradient(to right, #8954ff, #ff008c);
  box-shadow: 0px 3px 15px rgba(156, 26, 255, 0.3);

  margin-top: 4rem;
  padding: 0 1rem;

  color: white;
  font-weight: 700;
  font-size: 1rem;

  @media ${Device.min.LaptopL} {
    width: 200px;
    height: 67px;
    margin-top: 5rem;
    font-size: 1.3rem;
  }
`

const HomeSection = () => {
  return (
    <motion.div>
      <SectionWrapper id="home">
        <Container>
          <HeaderText
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
          >
            <motion.span>Hi! My name is</motion.span> <br />
            <NameHighlight>DEVIN EFENDY.</NameHighlight>
          </HeaderText>

          {RenderIntroText()}

          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ExploreButton>Explore</ExploreButton>
          </motion.a>
        </Container>
      </SectionWrapper>
    </motion.div>
  )
}

const RenderIntroText = () => {
  if (window.innerWidth >= 768) {
    return (
      <IntroText
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 2, ease: "easeOut" }}
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
        transition={{ delay: 0.7, duration: 2, ease: "easeOut" }}
      >
        I'm a third year computer science co-op student at the University of
        Manitoba.
      </IntroText>
    )
  }
}

export default HomeSection
