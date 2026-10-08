import styled from 'styled-components'

export const ProjectsSection = styled.section`
  padding-block: clamp(2.5rem, 6vw, 4.5rem);
  border-bottom: var(--border);
  .supporting-heading { margin-top: clamp(2rem, 5vw, 3.5rem); }
`
export const SectionIntro = styled.header`
  max-width: 48rem;
  h2 { margin: 0.6rem 0 0; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.15; letter-spacing: -0.035em; }
  h3 { margin: 0; font-size: clamp(1.25rem, 2.5vw, 1.65rem); line-height: 1.2; }
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
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`
