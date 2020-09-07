import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styled from "styled-components"

import Device from "../../utils/Device"
// import Scribble from "../Text/Scribble"
import SectionResponsiveLayout from "../layout/SectionResponsiveLayout"
import PortfolioSection from "../layout/PortfolioSection"

const ResponsiveContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  max-width: 600px;
`

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`
const ContactParagraph = styled(motion.p)`
  margin-bottom: 3rem;
  font-size: 18px;

  color: rgba(255, 255, 255, 0.65);

  text-align: left;

  a {
    color: #abdcff;
  }

  a:hover {
    text-decoration: underline;
  }
`

const TitleContainer = styled(motion.div)`
  text-align: left;
  margin-bottom: 2rem;
  width: 100%;
`

const ContactHeading = styled(motion.h1)`
  text-align: left;
  max-width: 400px;
  font-size: 1.5rem;

  margin-bottom: 2rem;

  background-image: linear-gradient(135deg, #f8d800, #fdeb71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Device.min.Laptop} {
    max-width: 500px;
  }
`

const ContactSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const elementVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }

  return (
    <PortfolioSection id="contact">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        style={{ width: "100%" }}
      >
        <SectionResponsiveLayout>
          <ResponsiveContainer>
            <TitleContainer
              variants={elementVariants}
              transition={{ duration: 0.5 }}
            >
              <motion.h3>contact</motion.h3>
            </TitleContainer>

            <ContactHeading
              variants={elementVariants}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Let's get in touch!
            </ContactHeading>

            <TextContainer
              variants={elementVariants}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ContactParagraph>
                I'm currently looking for internship/co-op opportunities. If you are
                interested or have any questions, feel free to reach me at my{" "}
                <a
                  href="mailto:efendyd@myumanitoba.ca"
                  target="_blank"
                  rel="noreferrer"
                >
                  e-mail
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/devinefendy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin
                </a>
                !
              </ContactParagraph>
            </TextContainer>
          </ResponsiveContainer>
        </SectionResponsiveLayout>
      </motion.div>
    </PortfolioSection>
  )
}

export default ContactSection
