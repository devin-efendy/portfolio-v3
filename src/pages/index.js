import React from "react"
// import styled, { createGlobalStyle } from "styled-components"
import { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

// import typography from "../utils/typography"
import SEO from "../components/seo"
import FramerNavigation from "../components/Navigation/FramerNavigation"
import HomeSection from "../components/HomeSection/HomeSection"
import AboutSection from "../components/AboutSection/AboutSection"
import ExperienceSection from "../components/ExperienceSection/ExperienceSection"

import SocialNav from "../components/Navigation/SocialNav"
import FixedLogo from "../components/Navigation/FixedLogo"

const Global = createGlobalStyle`
  body, p, h1, h2, h3, a { 
      color: white;
      margin:0; 
      padding:0; 
      box-sizing:border-box; 
  }

  body, html {
    /* overflow: ${({ nav }) => (nav ? "hidden" : "initial")}; */
    height: auto;
  }

  a{
    background: none !important;
    text-shadow: none !important;
    background-image: none !important;

    :hover {
      background-image: none !important;
      text-decoration: none;
      cursor: pointer;
    }
  }
`

const IndexPage = () => {
  // const [nav, showNav] = useState(false)

  return (
    <motion.div>
      <SEO title="Home" />

      <Global />

      <FramerNavigation />
      <FixedLogo />
      <SocialNav />

      <HomeSection />
      <AboutSection />
      <ExperienceSection />
    </motion.div>
  )
}

export default IndexPage
