import styled, { keyframes } from 'styled-components'

const ringPulse = keyframes`
  0%, 100% { box-shadow: 0 0 12px rgba(0, 229, 255, 0.3), inset 0 0 12px rgba(0, 229, 255, 0.05); }
  50% { box-shadow: 0 0 24px rgba(0, 229, 255, 0.5), 0 0 48px rgba(0, 229, 255, 0.1), inset 0 0 12px rgba(0, 229, 255, 0.05); }
`

export const FotoPerfil = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid ${(props) => props.theme.corAcento}50;
  animation: ${ringPulse} 3s ease-in-out infinite;
  transition: border-color 0.3s ease;
`
