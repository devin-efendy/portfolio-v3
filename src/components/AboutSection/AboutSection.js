import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { motion } from "framer-motion"
import styled from "styled-components"

import Device from "../../utils/Device"
import Title from "../Text/Title"
import Scribble from "../Text/Scribble"
import Colors from "../../utils/ColorPallate"

const SectionWrapper = styled(motion.section)`
  background: #1b1b1b;
  display: flex;

  padding-top: 5rem;

  /* align-items: center; */
  justify-content: center;

  height: 200vh;
`

const SectionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 0 2rem;
  width: 100%;

  /* border: 1px solid red; */

  @media ${Device.min.Tablet} {
    padding: 0 4rem;
  }

  @media ${Device.min.Laptop} {
    padding: 0 9rem;
  }
`

const ResponsiveContainer = styled(motion.div)`
  display: inline-grid;

  align-items: center;
  justify-items: center;
  /* align-items: center; */

  width: 100%;

  grid-template-columns: auto;
  /* grid-template-rows: auto auto; */

  /* border: 1px solid white; */

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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  /* padding: 0 1rem; */
  margin-bottom: 2rem;
  width: 100%;

  /* border: 1px solid red; */
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
  width: 100%;

  margin: auto;

  @media ${Device.min.Laptop} {
    width: 70%;
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

const KeyVal = styled(motion.span)``

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
        desktopAboutImage: file(relativePath: { eq: "about-img.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [
    data.mobileAboutImage.childImageSharp.fluid,
    {
      ...data.desktopAboutImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  console.log(data)

  return (
    <SectionWrapper id="about">
      <SectionContainer>
        <TitleContainer>
          <motion.h2>about me</motion.h2>
          {/* <Scribble style={{fontSize: "2rem"}}>About Me</Scribble> */}
        </TitleContainer>

        <ResponsiveContainer>
          <TextContainer>
            <Scribble>My strongest values </Scribble>

            <AboutHeading>
              Driven, passionate, dedicated, and curious software developer / CS
              Student.
            </AboutHeading>

            <AboutParagraph>
              <Scribble style={{ textAlign: "right" }}>
                A little bit about myself
              </Scribble>
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
