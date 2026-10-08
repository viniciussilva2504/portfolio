'use client'

import styled from 'styled-components'
import ErrorBoundary from '../ErrorBoundary'
import Hero from '../Hero'
import Header from '../../containers/Sidebar'
import Sobre from '../../containers/Sobre'
import Projetos from '../../containers/Projetos'
import AISkills from '../../containers/AISkills'
import TechStack from '../../containers/TechStack'
import ScreenSignal from '../ScreenSignal'
import EstiloGlobal, { Container, SectionLabel } from '../../styles'

const Contact = styled.section`
  padding-block: clamp(2.5rem, 6vw, 4.5rem);
  border-bottom: var(--border);
  h2 { margin: 0.65rem 0; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.15; }
  p { max-width: 42rem; color: var(--color-muted); margin: 0; }
  .links { display: flex; flex-wrap: wrap; gap: 1rem 1.5rem; margin-top: 1rem; }
  a { font-weight: 650; text-underline-offset: 0.25em; }
  a:hover { text-decoration-color: var(--color-blue); }
`
const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  padding-block: 1.25rem;
  color: var(--color-muted);
  font-size: 0.75rem;
  p { margin: 0; }
`

export default function PortfolioApp() {
  return (
    <>
      <EstiloGlobal />
      <ScreenSignal />
      <Container>
        <Header />
        <ErrorBoundary>
          <main>
            <Hero />
            <Sobre />
            <Projetos />
            <AISkills />
            <TechStack />
            <Contact id="contact" aria-labelledby="contact-title">
              <SectionLabel>05 / CONTACT</SectionLabel>
              <h2 id="contact-title">Let’s talk about quality.</h2>
              <p>For QA, software testing and test automation opportunities, get in touch or explore my work.</p>
              <div className="links">
                <a href="mailto:vinicius.silva2504@gmail.com">Email Vinicius <span aria-hidden="true">↗</span></a>
                <a href="/CV_Vinicius_Silva_Frontend.pdf" target="_blank" rel="noreferrer">Download CV <span aria-hidden="true">↗</span></a>
                <a href="https://www.linkedin.com/in/vjsilva2504/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <a href="https://github.com/viniciussilva2504" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </Contact>
          </main>
        </ErrorBoundary>
        <Footer><p>© {new Date().getFullYear()} Vinicius Jesus da Silva</p><p>Software quality · Porto, Portugal</p></Footer>
      </Container>
    </>
  )
}
