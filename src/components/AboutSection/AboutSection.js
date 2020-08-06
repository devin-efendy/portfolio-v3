import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { motion } from "framer-motion"
import styled from "styled-components"

import Device from "../../utils/Device"
import Title from "../Text/Title"
import Scribble from "../Text/Scribble"

const SectionWrapper = styled(motion.section)`
  background: #1b1b1b;
  display: flex;

  padding-top: 5rem;

  /* align-items: center; */
  justify-content: center;

  height: 100vh;
`

const ResponsiveContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  padding: 0 2rem;
`

const TitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  /* padding: 0 1rem; */
  margin-bottom: 2rem;
  width: 100%;
`

const ImgContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 250px;
`

const ImgMobile = styled(motion.custom(Img))`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 25px;
`

const AboutSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        aboutImageMobile: file(relativePath: { eq: "about-img-sqr.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  console.log(data)

  return (
    <SectionWrapper id="about">
      <ResponsiveContainer style={{ border: "1px solid white" }}>
        <TitleContainer style={{ border: "1px solid red" }}>
          <motion.h2>about me</motion.h2>
          <Scribble>A little bit about myself</Scribble>
        </TitleContainer>

        <ImgContainer>
          <ImgMobile fluid={data.aboutImageMobile.childImageSharp.fluid} />
        </ImgContainer>
      </ResponsiveContainer>
    </SectionWrapper>
  )
}

export default AboutSection
