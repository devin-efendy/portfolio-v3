import React from 'react'

import { motion } from 'framer-motion'

import styled from 'styled-components'

import Scribble from './Text/Scribble'
import SectionResponsiveLayout from './layout/SectionResponsiveLayout'
import PortfolioSection from './layout/PortfolioSection'

const ResponsiveContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 0 auto;
`

const FooterText = styled(motion.p)`
  margin-bottom: 3rem;
  font-size: 18px !important;

  color: rgba(255, 255, 255, 0.65);

  text-align: left;

  a {
    color: #abdcff;
  }

  a:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <PortfolioSection
      id="footer"
      style={{ paddingTop: '4rem', paddingBottom: '0rem' }}
    >
      <SectionResponsiveLayout>
        <ResponsiveContainer>
          <FooterText>
            {' '}
            <Scribble>This website is created by</Scribble>{' '}
            <a
              href="https://github.com/devin-efendy"
              target="_blank"
              rel="noreferrer"
            >
              @devin-efendy
            </a>
            <Scribble>, 2023</Scribble>
          </FooterText>
        </ResponsiveContainer>
      </SectionResponsiveLayout>
    </PortfolioSection>
  )
}

export default Footer
