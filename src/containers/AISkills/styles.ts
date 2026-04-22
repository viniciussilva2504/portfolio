import styled from 'styled-components'

export const AIContainer = styled.section`
  margin-top: 64px;
  margin-bottom: 64px;
`

export const AIGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AICard = styled.a`
  display: block;
  padding: 20px 16px;
  border: 1px solid ${(props) => props.theme.corDaBorda};
  margin: -1px 0 0 -1px;
  background: transparent;
  text-decoration: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${(props) => props.theme.corSuperficie};
  }
`

export const AICardTitle = styled.h4`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.corPrincipal};
  margin-bottom: 8px;
`

export const AICardDesc = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.corSecundaria};
  line-height: 1.6;
`
