import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styled from "styled-components"

import Device from "../../utils/Device"
import Scribble from "../Text/Scribble"
import SectionResponsiveLayout from "../layout/SectionResponsiveLayout"
import PortfolioSection from "../layout/PortfolioSection"

const ResponsiveContainer = styled(motion.div)`
  display: inline-grid;

  align-items: center;
  justify-items: center;

  width: 100%;

  grid-template-columns: auto;

  @media ${Device.min.Laptop} {
    grid-column-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1000) {
    grid-column-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }
`

const TextContainer = styled(motion.div)`
  @media ${Device.min.Laptop} {
    grid-column: 1 / 4;
  }
`

const TitleContainer = styled(motion.div)`
  grid-column: 1 / 3;
  margin-bottom: 2rem;
  width: 100%;
`

const ImgContainer = styled(motion.div)`
  width: 100%;
  grid-column: 1 / 2;

  @media ${Device.min.Laptop} {
    grid-column: 4 / 6;
  }
`

const ImgMobile = styled(motion.custom(Img))`
  border-radius: 10px;
  max-width: 250px;

  margin: auto;

  @media ${Device.min.Laptop} {
    max-width: 250px;
  }

  @media ${Device.min.LaptopM} {
    max-width: 270px;
  }

  // @media ${Device.min.LaptopL} {
  //   max-width: 300px;
  // }
`
const AboutHeading = styled(motion.h1)`
  text-align: left;
  max-width: 400px;
  font-size: 1.5rem;

  margin-bottom: 1rem;

  background-image: linear-gradient(135deg, #ea5455 10%, #feb692 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Device.min.Laptop} {
    max-width: 500px;
  }
`

const AboutParagraph = styled(motion.p)`
  margin-bottom: 3rem;
  /* max-width: 500px; */
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

const AboutSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mobileAboutImage: file(relativePath: { eq: "about-img-sqr.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [data.mobileAboutImage.childImageSharp.fluid]

  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      console.log("[#about]: in-view")
    }
  }, [controls, inView])

  const elementVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }

  return (
    <PortfolioSection id="about">
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
              <motion.h3>about me</motion.h3>
            </TitleContainer>

            <TextContainer
              variants={elementVariants}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Scribble>My strongest values </Scribble>

              <AboutHeading>
                Driven, passionate, and dedicated software developer / CS
                Student.
              </AboutHeading>

              <Scribble style={{ width: "100%", textAlign: "right" }}>
                A little bit about myself
              </Scribble>
              <AboutParagraph>
                I'm a fourth year Computer Science Honours{" "}
                <a href="http://coop.cs.umanitoba.ca/" target="_blank">
                  (Co-op)
                </a>{" "}
                student at the{" "}
                <a href="https://www.sci.umanitoba.ca/cs/" target="_blank">
                  University of Manitoba
                </a>
                . I have been very passionate about all things tech. Especially,
                in area such as Software Engineering and Web Development. I
                would be very happy to explore other areas too!
                <br />
                <br />I enjoy going to Hackathons and programming
                contests. Earlier this year, I went to Montreal to attend{" "}
                <a href="http://2020.cusec.net/#/" target="_blank">
                  CUSEC 2020
                </a>
                .
              </AboutParagraph>
            </TextContainer>

            <ImgContainer
              variants={elementVariants}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ImgMobile fluid={sources} />
            </ImgContainer>
          </ResponsiveContainer>
        </SectionResponsiveLayout>
      </motion.div>
    </PortfolioSection>
  )
}

export default AboutSection
