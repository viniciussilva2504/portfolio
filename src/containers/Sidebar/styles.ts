import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: ${(props) => props.theme.fontMono};
  letter-spacing: 1px;
`

export const BotaoTema = styled.button`
  padding: 8px 0;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 9px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fontMono};
  letter-spacing: 3px;
  text-transform: uppercase;
  background: transparent;
  cursor: none;
  border: none;
  border-top: 1px solid ${(props) => props.theme.corDaBorda};
  width: 100%;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.corPrincipal};
  }
`

export const StatusLine = styled.p`
  font-size: 9px;
  color: ${(props) => props.theme.corAcento};
  font-family: ${(props) => props.theme.fontMono};
  display: flex;
  align-items: center;
  gap: 0;
  margin-top: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export const StatusDot = styled.span`
  display: inline-block;
  width: 5px;
  height: 5px;
  background: ${(props) => props.theme.corAcento};
  margin-right: 8px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: left;
  padding: 0;
  border-right: 1px solid ${(props) => props.theme.corDaBorda};
  padding-right: 40px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
    padding-right: 0;
    padding-bottom: 32px;
    margin-bottom: 48px;
  }
`

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 24px;
  border-top: 1px solid ${(props) => props.theme.corDaBorda};
`

export const SidebarLink = styled.a`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.corSecundaria};
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
  transition: color 0.15s ease;

  &:hover {
    color: ${(props) => props.theme.corPrincipal};
  }
`
