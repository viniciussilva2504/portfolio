import styled from 'styled-components'

export const ToolkitSection = styled.section`
  padding-block: clamp(2.5rem, 6vw, 4.5rem);
  border-bottom: var(--border);
  h2 { margin: 0.6rem 0 0; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.15; letter-spacing: -0.035em; }
`
export const SkillMatrix = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 1.5rem;
  border-top: var(--border);
  border-left: var(--border);
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`
export const SkillGroup = styled.section`
  min-width: 0;
  padding: 1rem;
  border-right: var(--border);
  border-bottom: var(--border);
  h3 { margin: 0 0 0.75rem; font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.06em; }
`
export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  li { display: inline-flex; align-items: center; gap: 0.45rem; color: var(--color-muted); font-size: 0.85rem; overflow-wrap: anywhere; }
  li span { width: 0.4rem; height: 0.4rem; background: var(--color-text); flex: 0 0 auto; }
  li span.accent { background: var(--color-blue); }
`
export const AdditionalWork = styled.aside`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
  h3 { flex-basis: 100%; margin: 0; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; }
  a { font-size: 0.8rem; color: var(--color-muted); text-underline-offset: 0.2em; }
`
