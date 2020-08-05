import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"

const Brand = styled(motion.div)`
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;

  width: 50px;
  height: 5px;

  @media ${Device.min.Tablet} {
    top: 2rem;
    right: 2rem;
  }

  @media ${Device.min.Desktop} {
    top: 3rem;
    right: 3rem;
  }
`

const FixedLogo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logoDE128: file(relativePath: { eq: "logo/LogoDE128.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 70, maxHeight: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  console.log(data)

  return (
    <Brand>
      <Img fluid={data.logoDE128.childImageSharp.fluid} />
    </Brand>
  )
}

export default FixedLogo
