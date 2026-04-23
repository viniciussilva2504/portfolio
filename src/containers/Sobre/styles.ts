import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 48px;
  display: flex;
  gap: 16px;
  align-items: stretch;

  img {
    flex: 1;
    min-width: 0;
    height: auto;
    object-fit: contain;
    border-radius: 16px;
    border: 3px solid ${(props) => props.theme.corDaBorda};
    background: ${(props) => props.theme.corFundo};
    box-shadow: 0 0 10px ${(props) => props.theme.corAcento}35,
      0 0 25px ${(props) => props.theme.corAcento}15,
      inset 0 0 10px ${(props) => props.theme.corAcento}08;
    transition: box-shadow 0.3s ease;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 32px;
`

export const SkillBadge = styled.span<{ $variant?: 'primary' | 'secondary' | 'accent' }>`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 11px;
  letter-spacing: 0.5px;
  padding: 5px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;

  ${(props) => {
    switch (props.$variant) {
      case 'accent':
        return `
          background: ${props.theme.corAcento2}18;
          color: ${props.theme.corAcento2};
          border: 1px solid ${props.theme.corAcento2}40;
        `
      case 'secondary':
        return `
          background: ${props.theme.corVerde}15;
          color: ${props.theme.corVerde};
          border: 1px solid ${props.theme.corVerde}35;
        `
      default:
        return `
          background: ${props.theme.corAcento}12;
          color: ${props.theme.corAcento};
          border: 1px solid ${props.theme.corAcento}30;
        `
    }
  }}

  &:hover {
    transform: translateY(-1px);
  }
`

export const SobreContainer = styled.div`
  margin-bottom: 48px;
`

export const HighlightText = styled.span`
  color: ${(props) => props.theme.corAcento};
  font-weight: 600;
`
