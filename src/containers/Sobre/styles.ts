import styled from 'styled-components'

export const ProfileSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(17rem, 0.9fr);
  gap: clamp(2rem, 6vw, 5rem);
  padding-block: clamp(2.5rem, 6vw, 4.5rem);
  border-bottom: var(--border);
  @media (max-width: 700px) { grid-template-columns: 1fr; gap: 1.75rem; }
`
export const ProfileCopy = styled.div`
  h2 { max-width: 18ch; margin: 0.6rem 0 0.8rem; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.15; letter-spacing: -0.035em; }
  p { max-width: 45rem; color: var(--color-muted); margin: 0.7rem 0 0; }
`
export const FocusList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0 0 1rem;
  padding: 0;
  li { border: var(--border); padding: 0.3rem 0.55rem; font-size: 0.75rem; font-weight: 600; }
  li:nth-child(3n + 1) { border-left: 3px solid var(--color-red); }
  li:nth-child(3n + 2) { border-left: 3px solid var(--color-blue); }
  li:nth-child(3n) { border-left: 3px solid var(--color-yellow); }
`
export const EvidenceGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: var(--border);
  border-left: var(--border);
  margin: 0;
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`
export const EvidenceItem = styled.div`
  min-width: 0;
  padding: 0.7rem;
  border-right: var(--border);
  border-bottom: var(--border);
  dt { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
  dd { margin: 0.2rem 0 0; color: var(--color-muted); font-size: 0.8rem; overflow-wrap: anywhere; }
`
