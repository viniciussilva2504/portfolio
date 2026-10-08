import styled from 'styled-components'

export const HeaderBar = styled.header`
  min-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: var(--border);
  @media (max-width: 900px) { flex-wrap: wrap; padding-block: 0.75rem; }
  @media (max-width: 520px) { align-items: flex-start; }
`

export const Identity = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  font-weight: 700;
  line-height: 1.25;
  .mark {
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border: var(--border);
    font-size: 0.875rem;
  }
`

export const NavWrapper = styled.nav` flex: 1; `
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem clamp(0.5rem, 2vw, 1.5rem);
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 900px) { justify-content: flex-start; }
  @media (max-width: 520px) { width: 100%; gap: 0.25rem 1rem; }
`
export const NavLink = styled.a`
  display: inline-block;
  padding-block: 0.4rem;
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--color-muted);
  border-bottom: 1px solid transparent;
  transition: color 160ms ease, border-color 160ms ease;
  &:hover { color: var(--color-text); border-color: var(--color-red); }
`
export const HeaderLinks = styled.div`
  display: flex;
  gap: 1rem;
  a { font-size: 0.8125rem; font-weight: 600; text-decoration: none; }
  a:hover { text-decoration: underline; text-decoration-color: var(--color-blue); text-underline-offset: 0.25em; }
  @media (max-width: 520px) { width: 100%; }
`
