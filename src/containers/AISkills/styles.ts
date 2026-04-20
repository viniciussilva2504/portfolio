import styled from 'styled-components'

export const AIContainer = styled.section`
  margin-top: 48px;
  margin-bottom: 48px;
`

export const AIGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AICard = styled.a`
  display: block;
  padding: 16px;
  border: 3px solid ${(props) => props.theme.corAcento2}30;
  border-radius: 16px;
  background: ${(props) => props.theme.corSuperficie};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.corAcento2}60;
    box-shadow: 0 0 16px ${(props) => props.theme.corAcento2}12;
    transform: translateY(-2px);
  }
`

export const AICardTitle = styled.h4`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.theme.corAcento2};
  margin-bottom: 6px;
`

export const AICardDesc = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.corSecundaria};
  line-height: 1.5;
`
