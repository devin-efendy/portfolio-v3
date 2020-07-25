import React from "react"
// import styled, { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import SEO from "../components/seo"
import FramerNavigation from "../components/Navigation/FramerNavigation"
import SectionWrapper from "../components/SectionWrapper"

// const Global = createGlobalStyle`
//   body, p { 
//       margin:0; 
//       padding:0; 
//       box-sizing:border-box; 
//   }

//   body, html {
//     overflow: ${({ nav }) => (nav ? "hidden" : "initial")};
//     height: auto;
//   }
// `

const PageWrapper = styled.div`
`

const IndexPage = () => {
  // const [nav, showNav] = useState(false)

  return (
    <PageWrapper>
      <SEO title="Home" />

      {/* <Global nav={nav} /> */}

      <FramerNavigation/>

      <SectionWrapper
        customStyle={{ backgroundColor: "#191919", height: "1000px" }}
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
