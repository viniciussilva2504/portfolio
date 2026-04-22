import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '13px')};
  font-weight: 700;
  text-align: left;
  font-family: ${(props) => props.theme.fontSans};
  letter-spacing: -0.5px;
  line-height: 1.2;
`
