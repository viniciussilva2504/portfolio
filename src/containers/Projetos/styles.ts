import styled from 'styled-components'

export const ProjectsSection = styled.section`
  padding-block: clamp(2.5rem, 6vw, 4.5rem);
  border-bottom: var(--border);
`
export const SectionIntro = styled.header`
  max-width: 48rem;
  h2 { margin: 0.6rem 0 0; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.15; letter-spacing: -0.035em; }
  p { max-width: 42rem; color: var(--color-muted); margin: 0.75rem 0 0; }
`
export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 1.75rem 0 0;
  align-items: stretch;
  > li { display: flex; min-width: 0; }
  > li:first-child { grid-column: 1 / -1; }
  @media (max-width: 680px) { grid-template-columns: 1fr; > li:first-child { grid-column: auto; } }
`
