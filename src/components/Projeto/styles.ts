import styled from 'styled-components'

export const Card = styled.div`
  border: 3px solid ${(props) => props.theme.corDaBorda};
  padding: 20px 16px;
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 16px;
  background: ${(props) => props.theme.corSuperficie};
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.corAcento}50;
    box-shadow: 0 0 16px ${(props) => props.theme.corAcento}55,
      0 0 40px ${(props) => props.theme.corAcento}25,
      inset 0 0 10px ${(props) => props.theme.corAcento}08;
  }
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
  margin-top: auto;
  padding-top: 20px;
  align-self: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 12px ${(props) => props.theme.corAcento}50;
    transform: scale(1.02);
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
