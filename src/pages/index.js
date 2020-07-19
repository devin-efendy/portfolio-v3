import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
// import { rhythm } from "../utils/typography"

import SEO from "../components/seo"
import MenuNavigation from "../components/MenuNavButton"
import SectionWrapper from "../components/SectionWrapper"

const Global = createGlobalStyle`
  body, p { 
      margin:0; 
      padding:0; 
      box-sizing:border-box; 
  }

  body, html {
    overflow: ${({ nav }) => (nav ? "hidden" : "initial")};
    height: auto;
  }
`

const PageWrapper = styled.div`
`

const IndexPage = () => {
  const [nav, showNav] = useState(false)

  return (
    <PageWrapper>
      <SEO title="Home" />

      <Global nav={nav} />

      <MenuNavigation nav={nav} showNav={showNav} />

      <SectionWrapper
        customStyle={{ backgroundColor: "#d7d7d7", height: "1000px" }}
      >
        <p>Homepage</p>
      </SectionWrapper>

      <SectionWrapper customStyle={{ height: "1000px" }}>
        <h1>About</h1>
      </SectionWrapper>
    </PageWrapper>
  )
}

export default IndexPage
