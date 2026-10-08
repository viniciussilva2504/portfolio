import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  :root {
    color-scheme: light;
    --color-bg: #FAFAF7;
    --color-text: #111111;
    --color-muted: #4A4A4A;
    --color-border: #111111;
    --color-red: #D64541;
    --color-blue: #356AE6;
    --color-yellow: #E4B72C;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --container: 1200px;
    --border: 1px solid var(--color-border);
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 1rem; }
  body {
    margin: 0;
    background: var(--color-bg);
    color: var(--color-text);
    font-family: Inter, 'Aptos', 'Helvetica Neue', Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    min-width: 320px;
  }
  body, button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; }
  a:focus-visible, button:focus-visible { outline: 3px solid var(--color-blue); outline-offset: 4px; }
  ::selection { background: #E4B72C66; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  width: min(100% - 2rem, var(--container));
  margin-inline: auto;
`

export const SectionLabel = styled.span`
  color: var(--color-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.75rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  line-height: 1.4;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 0.65rem;
    height: 0.65rem;
    background: var(--color-red);
    flex: 0 0 auto;
  }
`

export const SectionDivider = styled.div`
  height: 1px;
  background: var(--color-border);
  margin-block: clamp(2.5rem, 7vw, 5rem);
`
