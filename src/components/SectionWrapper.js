import React, { useState } from "react"

const SectionWrapper = ({children, customStyle}) => {

  const defaultStyle = {
    backgroundColor: "white",
    height: "100%"
  }

  const divStyle = customStyle ? customStyle : defaultStyle;

  return (
    <div style={divStyle}>
        {children}
    </div>
  )
}

export default SectionWrapper
