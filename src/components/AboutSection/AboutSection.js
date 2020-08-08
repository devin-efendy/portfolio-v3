import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { motion } from "framer-motion"
import styled from "styled-components"

import Device from "../../utils/Device"
import Scribble from "../Text/Scribble"
import SectionContainer from "../layout/SectionContainer"

const SectionWrapper = styled(motion.section)`
  background: #1b1b1b;
  display: flex;

  padding: 5rem 0;

  justify-content: center;

  /* height: 200vh; */
`

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
    max-width: 270px;
  }

  @media ${Device.min.LaptopM} {
    max-width: 350px;
  }
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

  color: rgba(255, 255, 255, 0.75);

  text-align: left;
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

  console.log(data)

  return (
    <SectionWrapper id="about">
      <SectionContainer>
        <ResponsiveContainer>
          <TitleContainer>
            <motion.h2>about me</motion.h2>
          </TitleContainer>

          <TextContainer>
            <Scribble>My strongest values </Scribble>

            <AboutHeading>
              Driven, passionate, dedicated, and curious software developer / CS
              Student.
            </AboutHeading>

            <Scribble style={{ width: "100%", textAlign: "right" }}>
              A little bit about myself
            </Scribble>
            <AboutParagraph>
              I'm a fourth year Computer Science (Co-op) Honours student at the
              University of Manitoba. I have been very passionate about all
              things tech. Especially, in area such as Software Engineering, Web
              Development, and UI/UX Design. But, I would be happy to explore
              other areas too!
            </AboutParagraph>
          </TextContainer>

          <ImgContainer>
            <ImgMobile fluid={sources} />
          </ImgContainer>
        </ResponsiveContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default AboutSection
