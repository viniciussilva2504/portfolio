'use client'

import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import ErrorBoundary from '../ErrorBoundary'
import Hero from '../Hero'
import Starfield from '../Starfield'
import Sidebar from '../../containers/Sidebar'
import Sobre from '../../containers/Sobre'
import Projetos from '../../containers/Projetos'
import AISkills from '../../containers/AISkills'
import EstiloGlobal, { Container } from '../../styles'
import temaLight from '../../themes/light'
import temaDark from '../../themes/dark'

export default function PortfolioApp() {
  const [estaUsandoTemaDark, setestaUsandoTemaDark] = useState(true)

  function trocaTema() {
    setestaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Starfield />
      <ErrorBoundary>
        <Container>
          <Sidebar
            trocarTema={trocaTema}
            estaUsandoTemaDark={estaUsandoTemaDark}
          />
          <main>
            <Hero />
            <Sobre />
            <Projetos />
            <AISkills />
          </main>
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
