import { JSX } from 'react/jsx-runtime'
import styled from 'styled-components'
import { Props } from '.'

import React from 'react'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
