import { JSX } from 'react/jsx-runtime'
import styled from 'styled-components'
import { Props } from '.'

import React from 'react'

export const Title = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
