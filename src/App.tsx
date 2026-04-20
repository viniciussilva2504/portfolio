import { lazy, Suspense, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import ErrorBoundary from './components/ErrorBoundary'
import Starfield from './components/Starfield'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

const Sobre = lazy(() => import('./containers/Sobre'))
const Projetos = lazy(() => import('./containers/Projetos'))
const AISkills = lazy(() => import('./containers/AISkills'))

function App() {
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
          <Sidebar trocarTema={trocaTema} estaUsandoTemaDark={estaUsandoTemaDark} />
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Sobre />
              <Projetos />
              <AISkills />
            </Suspense>
          </main>
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
