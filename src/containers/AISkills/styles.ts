import styled from 'styled-components'

export const ProcessSection = styled.section`
  padding-block: clamp(2.5rem, 6vw, 4.5rem);
  border-bottom: var(--border);
  h2 { margin: 0.6rem 0 0; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.15; letter-spacing: -0.035em; }
  .intro { max-width: 42rem; margin: 0.75rem 0 0; color: var(--color-muted); }
`
export const ProcessGrid = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 1.75rem 0 0;
  padding: 0;
  border-top: var(--border);
  border-left: var(--border);
  @media (max-width: 680px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 380px) { grid-template-columns: 1fr; }
`
export const ProcessStep = styled.li`
  min-width: 0;
  min-height: 8.75rem;
  padding: 1rem;
  border-right: var(--border);
  border-bottom: var(--border);
  > span { color: var(--color-red); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; }
  h3 { margin: 0.55rem 0 0.2rem; font-size: 1rem; text-transform: uppercase; }
  p { margin: 0; color: var(--color-muted); font-size: 0.82rem; line-height: 1.5; }
`
