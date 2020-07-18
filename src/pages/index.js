import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { rhythm } from "../utils/typography"

import SEO from "../components/seo"
import MenuNavigation from "../components/MenuNavButton"
import SectionWrapper from "../components/SectionWrapper"

const Global = createGlobalStyle`
  body, p { 
      margin:0; 
      padding:0; 
      box-sizing:border-box; 
  }
`

const IndexPage = () => {
  const [nav, showNav] = useState(false)

  return (
    <div>
      <SEO title="Home" />

      <Global />

      <MenuNavigation />

      <SectionWrapper
        customStyle={{ backgroundColor: "#d7d7d7", height: "100vh" }}
      >
        <p>Homepage</p>
      </SectionWrapper>

      <SectionWrapper customStyle={{ height: "100vh" }}>
        <h1>About</h1>
      </SectionWrapper>
    </div>
  )
}

export default IndexPage
