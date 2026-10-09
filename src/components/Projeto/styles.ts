import styled from 'styled-components'

export const Card = styled.article`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: clamp(1rem, 2vw, 1.5rem);
  border: var(--border);
  background: var(--color-bg);
  transition: border-color 160ms ease, transform 160ms ease;
  &:hover { border-color: var(--color-blue); transform: translateY(-2px); }
`
export const CardType = styled.p`
  margin: 0 0 0.5rem;
  color: var(--color-red);
  font-size: 0.7rem;
  line-height: 1.4;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
`
export const ProjectPreview = styled.div`
  width: 100%;
  max-height: 18rem;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid #11111133;
  background: var(--color-bg);
  img { display: block; width: 100%; height: auto; max-height: 18rem; object-fit: contain; }
`
export const CardHeading = styled.h3`
  margin: 0;
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  line-height: 1.25;
  letter-spacing: -0.025em;
  overflow-wrap: anywhere;
`
export const CardDetails = styled.dl`
  margin: 1rem 0 0;
  border-top: 1px solid var(--color-text);
`
export const Detail = styled.div`
  display: grid;
  grid-template-columns: minmax(6.5rem, 0.32fr) minmax(0, 1fr);
  gap: 0.75rem;
  padding-block: 0.65rem;
  border-bottom: 1px solid #11111133;
  dt { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
  dd { margin: 0; color: var(--color-muted); font-size: 0.875rem; line-height: 1.5; overflow-wrap: anywhere; }
  @media (max-width: 380px) { grid-template-columns: 1fr; gap: 0.15rem; }
`
export const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
`
export const Tag = styled.li`
  padding: 0.2rem 0.45rem;
  border: 1px solid #11111166;
  color: var(--color-text);
  font-size: 0.7rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
`
export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.25rem;
  margin-top: auto;
  padding-top: 1rem;
  a { font-size: 0.8rem; font-weight: 700; text-underline-offset: 0.25em; }
  a:hover { text-decoration-color: var(--color-blue); }
`
