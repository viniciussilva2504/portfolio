import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  gap: 16px;
  align-items: stretch;

  img {
    flex: 1;
    min-width: 0;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%) contrast(0.8);
    border: 1px solid ${(props) => props.theme.corDaBorda};
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 24px;
  margin-bottom: 40px;
`

export const SkillBadge = styled.span<{ $variant?: 'primary' | 'secondary' | 'accent' }>`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 10px;
  border: 1px solid ${(props) => props.theme.corDaBorda};
  color: ${(props) => props.theme.corSecundaria};
  transition: all 0.15s ease;

  ${(props) => {
    switch (props.$variant) {
      case 'accent':
        return `border-color: ${props.theme.corAcento2}40; color: ${props.theme.corAcento2};`
      case 'secondary':
        return `border-color: ${props.theme.corVerde}40; color: ${props.theme.corVerde};`
      default:
        return ''
    }
  }}

  &:hover {
    border-color: ${(props) => props.theme.corAcento};
    color: ${(props) => props.theme.corAcento};
  }
`

export const SobreContainer = styled.div`
  margin-bottom: 64px;
`

export const HighlightText = styled.span`
  color: ${(props) => props.theme.corAcento};
  font-weight: 700;
`
