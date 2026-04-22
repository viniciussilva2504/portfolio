import styled from 'styled-components'

export const Card = styled.div`
  border-top: 2px solid ${(props) => props.theme.corDaBorda};
  padding: 24px 0;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.corAcento};
  }
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 9px;
  font-family: ${(props) => props.theme.fontMono};
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.corPrincipal};
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 16px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.corAcento};
    color: #ffffff;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`

export const Tag = styled.span`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 2px 8px;
  color: ${(props) => props.theme.corSecundaria};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.corAcento2};
    color: ${(props) => props.theme.corAcento2};
  }
`
