import styled from 'styled-components'

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(14rem, 0.42fr) minmax(0, 1fr);
  grid-template-areas: 'aside copy';
  gap: clamp(2rem, 7vw, 6rem);
  align-items: center;
  padding-block: clamp(2.5rem, 6vw, 5rem);
  border-bottom: var(--border);
  min-width: 0;
  > div { grid-area: copy; }
  > aside { grid-area: aside; }
  .positioning { max-width: 43rem; margin: 1rem 0 0.75rem; color: var(--color-muted); font-size: clamp(1rem, 1.5vw, 1.15rem); }
  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'copy' 'aside'; gap: 2rem; }
`
export const HeroLabel = styled.p`
  margin: 0 0 0.75rem;
  color: var(--color-red);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`
export const HeroHeading = styled.h1`
  max-width: 15ch;
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
  overflow-wrap: anywhere;
`
export const HeroSubheading = styled.h2`
  margin: 0.8rem 0 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5;
  font-weight: 550;
  span { color: var(--color-blue); padding-inline: 0.1em; }
`
export const HeroLocation = styled.p`
  color: var(--color-muted);
  font-size: 0.875rem;
  margin: 0.6rem 0 0;
  span { color: var(--color-red); padding-inline: 0.3rem; }
`
export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: 1.5rem;
  a { min-height: 2.75rem; display: inline-flex; align-items: center; gap: 0.6rem; font-size: 0.875rem; font-weight: 650; text-underline-offset: 0.25em; }
  a.primary { padding: 0.6rem 0.85rem; color: var(--color-bg); background: var(--color-text); text-decoration: none; border: 1px solid var(--color-text); }
  a.primary:hover { background: var(--color-blue); border-color: var(--color-blue); }
  a:not(.primary):hover { text-decoration-color: var(--color-red); }
`
export const HeroAside = styled.aside`
  border-right: 1px solid var(--color-text);
  padding: 0.35rem 1.25rem 0.35rem 0;
  min-width: 0;
  .profile-focus { display: flex; align-items: flex-start; gap: 1rem; }
  .portrait { width: clamp(3.5rem, 7vw, 4.5rem); height: auto; aspect-ratio: 1; object-fit: cover; border: 1px solid var(--color-text); border-radius: 50%; flex: 0 0 auto; }
  .focus-copy { min-width: 0; }
  p { margin: 0 0 0.5rem; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; }
  ul { list-style: none; padding: 0; margin: 0; }
  li { padding-block: 0.25rem; color: var(--color-muted); font-size: 0.85rem; line-height: 1.45; }
  li::before { content: '—'; margin-right: 0.55rem; color: var(--color-blue); }
  .index { display: inline-block; margin-top: 0.85rem; font-size: 0.7rem; letter-spacing: 0.12em; color: var(--color-red); font-weight: 700; }
  .github-stats { display: grid; gap: 0.75rem; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid #11111166; }
  .github-stats img { display: block; width: 100%; height: auto; border: 1px solid #11111166; background: var(--color-bg); }
  @media (max-width: 900px) { border-right: 0; border-left: 1px solid var(--color-text); padding: 0.35rem 0 0.35rem 1rem; .github-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; } }
  @media (max-width: 520px) { .github-stats { grid-template-columns: 1fr; } }
`
