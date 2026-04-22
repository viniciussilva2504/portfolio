import styled, { keyframes } from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(0, 229, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.1); }
`

export const Descricao = styled(P)`
  margin-top: 16px;
  margin-bottom: 32px;
  font-family: ${(props) => props.theme.fontMono};
  letter-spacing: 0.5px;
`
export const BotaoTema = styled.button`
  border-radius: 8px;
  padding: 8px 14px;
  color: ${(props) => props.theme.corFundo};
  font-size: 11px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontMono};
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.corAcento};
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px ${(props) => props.theme.corAcento}60;
  }
`

export const StatusLine = styled.p`
  font-size: 11px;
  color: ${(props) => props.theme.corSecundaria};
  font-family: ${(props) => props.theme.fontMono};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-top: 4px;
`

export const StatusDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.corVerde};
  box-shadow: 0 0 8px ${(props) => props.theme.corVerde};
  margin-right: 8px;
  animation: ${glowPulse} 2s ease-in-out infinite;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;
  padding: 24px 16px;
  background: ${(props) => props.theme.corSuperficie};
  border: 3px solid ${(props) => props.theme.corDaBorda};
  border-radius: 16px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    margin-bottom: 40px;
  }
`

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`

export const SidebarLink = styled.a`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 11px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.corSecundaria};
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.corAcento};
    background: ${(props) => props.theme.corAcento}10;
  }
`
