import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fontSans};
    list-style: none;
    box-sizing: border-box;
    cursor: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 120px;
    background-color: ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corPrincipal};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    overflow-x: hidden;

    @media (max-width: 768px) {
      padding-top: 24px;
      cursor: auto;
    }
  }

  @media (max-width: 768px) {
    * { cursor: auto; }
  }

  ::selection {
    background: ${(props) => props.theme.corAcento};
    color: ${(props) => props.theme.corFundo};
  }

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.corFundo};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.corSecundaria};
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 64px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    display: block;
    padding: 0 24px;
  }
`

export const SectionLabel = styled.span`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 9px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${(props) => props.theme.corSecundaria};
  border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
  padding-bottom: 8px;
  display: block;
  margin-bottom: 32px;
`

export const SectionDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${(props) => props.theme.corDaBorda},
    transparent
  );
  margin: 48px 0;
`
