import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import styled from "styled-components"
import Device from "../../utils/Device"
import { Link } from "react-scroll"

const Brand = styled(motion.div)`
  position: fixed;
  right: 1rem;
  top: 1rem;

  width: 50px;
  height: 5px;

  z-index: 10;

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

  return (
    <Link to={"home"} spy={true} smooth={true}>
      <Brand>
        <Img fluid={data.logoDE128.childImageSharp.fluid} />
      </Brand>
    </Link>
  )
}

export default FixedLogo
