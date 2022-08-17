import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Device from '../../utils/Device'
import PortfolioSection from '../layout/PortfolioSection'
import SectionResponsiveLayout from '../layout/SectionResponsiveLayout'
import Scribble from '../Text/Scribble'

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  width: 100%;

  opacity: 0;
`

const HeaderText = styled(motion.h1)`
  text-align: center;
  font-size: 1.5rem;

  @media ${Device.min.Tablet} {
    font-size: 2rem;
  }

  @media ${Device.min.LaptopL} {
    font-size: 3rem;
  }
`

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
  text-align: center;

  color: rgba(255, 255, 255, 0.65);

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
            <Scribble>Checkout my GitHub</Scribble>{' '}
            <a
              href="https://github.com/devin-efendy"
              target="_blank"
              rel="noreferrer"
            >
              @devin-efendy
            </a>{' '}
            <Scribble>and LinkedIn</Scribble>{' '}
            <a
              href="https://www.linkedin.com/in/devinefendy/"
              target="_blank"
              rel="noreferrer"
            >
              devinefendy
            </a>
          </FooterText>
        </ResponsiveContainer>
      </SectionResponsiveLayout>
    </PortfolioSection>
  )
}

const NameHighlight = styled(motion.span)`
  background-image: linear-gradient(135deg, #0396ff 40%, #abdcff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ComingSoon = () => {
  return (
    <PortfolioSection id="home" style={{ height: '100vh' }}>
      <Container
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 1, ease: 'easeOut' }}
      >
        <HeaderText>
          <NameHighlight>Coming Soon!</NameHighlight>
        </HeaderText>
        {Footer()}

      </Container>
    </PortfolioSection>
  )
}

export default ComingSoon
