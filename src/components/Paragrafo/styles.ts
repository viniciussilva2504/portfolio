import styled from 'styled-components'
import 'styled-components'

import { Props } from '.'

// Extende o DefaultTheme para incluir corPrincipal
declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
  }
}

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 22px;
`
