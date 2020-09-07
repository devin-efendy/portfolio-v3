import React from "react"
import { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

import SEO from "../components/seo"

import FramerNavigation from "../components/Navigation/FramerNavigation"
import SocialNav from "../components/Navigation/SocialNav"
import FixedLogo from "../components/Navigation/FixedLogo"

import HomeSection from "../components/HomeSection/HomeSection"
import AboutSection from "../components/AboutSection/AboutSection"
import ExperienceSection from "../components/ExperienceSection/ExperienceSection"
import ProjectSection from "../components/ProjectSection/ProjectSection"

import useProjectQuery from "../graphql/ProjectQuery"
import ContactSection from "../components/ContactSection/ContactSection"
import Footer from "../components/Footer"

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
  return (
    <motion.div>
      <SEO title="Software Developer" />

      <Global />

      <FramerNavigation />
      <FixedLogo />
      <SocialNav />

      <HomeSection />
      <AboutSection />
      <ExperienceSection />

      <ProjectSection projectList={useProjectQuery()} />

      <ContactSection />

      <Footer />
    </motion.div>
  )
}

export default IndexPage
