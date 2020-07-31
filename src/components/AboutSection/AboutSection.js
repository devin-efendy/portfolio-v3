import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"
import Title from "../Text/Title"

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

const AboutSection = () => {
  return (
    <SectionWrapper style={{border: "1px solid white"}} id="about">
      <Container style={{border: "1px solid red"}}>
        <Title>About</Title>
      </Container>
    </SectionWrapper>
  )
}

export default AboutSection
