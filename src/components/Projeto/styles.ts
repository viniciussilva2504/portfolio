import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // add custom theme properties here
    corDaBorda: string
    corFundo: string
    corDeFundoBotao: string
  }
}

import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 12px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
