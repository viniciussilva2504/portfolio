import styled from 'styled-components'

export const Card = styled.div<{ $featured?: boolean }>`
  border: 3px solid
    ${(props) =>
      props.$featured
        ? `${props.theme.corAcento}50`
        : props.theme.corDaBorda};
  padding: ${(props) => (props.$featured ? '28px 24px' : '20px 16px')};
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 16px;
  background: ${(props) =>
    props.$featured
      ? `linear-gradient(135deg, ${props.theme.corSuperficie} 0%, ${props.theme.corSuperficie2} 100%)`
      : props.theme.corSuperficie};
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${(props) => (props.$featured ? '12px' : '0px')};

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.corAcento}80;
    box-shadow: 0 0 16px ${(props) => props.theme.corAcento}55,
      0 0 40px ${(props) => props.theme.corAcento}25,
      inset 0 0 10px ${(props) => props.theme.corAcento}08;
  }
`

export const FeaturedBadge = styled.span`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.corAcento};
  background: ${(props) => props.theme.corAcento}15;
  border: 1px solid ${(props) => props.theme.corAcento}40;
  padding: 3px 10px;
  border-radius: 4px;
  align-self: flex-end;
`

export const BotoesContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 12px;
  font-family: ${(props) => props.theme.fontMono};
  font-weight: bold;
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.corAcento};
  text-decoration: none;
  padding: 8px 20px;
  display: inline-block;
  align-self: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 12px ${(props) => props.theme.corAcento}50;
    transform: scale(1.02);
  }
`

export const GitHubBotao = styled.a`
  color: ${(props) => props.theme.corAcento};
  font-size: 12px;
  font-family: ${(props) => props.theme.fontMono};
  font-weight: bold;
  letter-spacing: 1px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.corAcento}50;
  text-decoration: none;
  padding: 8px 20px;
  display: inline-block;
  align-self: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.corAcento}10;
    box-shadow: 0 0 12px ${(props) => props.theme.corAcento}30;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-top: 12px;
`

export const Tag = styled.span`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 10px;
  letter-spacing: 0.5px;
  padding: 3px 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.corAcento}10;
  color: ${(props) => props.theme.corAcento};
  border: 1px solid ${(props) => props.theme.corAcento}25;
  transition: all 0.2s ease;
`
