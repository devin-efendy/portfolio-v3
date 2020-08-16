import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import Device from "../../utils/Device"

const SectRespLayout = styled(motion.div)`
  width: 100%;

  padding: 0 2rem;

  @media ${Device.min.Tablet} {
    padding: 0 5rem;
  }

  @media ${Device.min.Laptop} {
    padding: 0 6rem;
  }

  @media ${Device.min.LaptopM} {
    padding: 0 10rem;
  }

  @media ${Device.min.LaptopXL} {
    padding: 0 15rem;
  }

  @media ${Device.min.FHD} {
    padding: 0 20rem;
  }

  @media ${Device.min.Desktop} {
    padding: 0 30rem;
  }
`

const SectionResponsiveLayout = ({ children }) => {
  return <SectRespLayout>{children}</SectRespLayout>
}

export default SectionResponsiveLayout;