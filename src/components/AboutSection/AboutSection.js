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
  padding: 0 1rem;
  width: 100%;

  border: 1px solid red;
`

const ResponsiveContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;

  /* align-items: flex-start; */

  border: 1px solid white;

  @media ${Device.min.Laptop} {
    flex-direction: row;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
`

const ImgMobile = styled(motion.custom(Img))`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 25px;

  @media ${Device.min.Tablet} {
    width: 300px;
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

  @media ${Device.min.Tablet} {
    /* font-size: 2rem; */
  }
`

const KeyVal = styled(motion.span)``

const AboutParagraph = styled(motion.p)`
  margin-bottom: 3rem;
  max-width: 500px;

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
          <motion.div>
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
              <br />
              <br />
              Currently, I'm working at Bold Commerce where I learn a lot about
              E-commerce, software engineering & agile practices, and also some
              knowledge of DevOps.
            </AboutParagraph>
          </motion.div>
          <ImgContainer>
            <ImgMobile fluid={sources} />
          </ImgContainer>
        </ResponsiveContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default AboutSection
