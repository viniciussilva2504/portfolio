import styled, { createGlobalStyle, keyframes } from 'styled-components'

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`

const EstiloGlobal = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fontSans};
    list-style: none;
    box-sizing: border-box;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corPrincipal};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    overflow-x: hidden;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.corAcento}40,
      transparent
    );
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
    z-index: 100;
    opacity: 0.3;
  }

  ::selection {
    background: ${(props) => props.theme.corAcento}40;
    color: ${(props) => props.theme.corPrincipal};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.corFundo};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.corAcento}40;
    border-radius: 3px;
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 260px 1fr;
  column-gap: 48px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 90%;
    display: block;
    padding: 0 16px;
  }
`

export const SectionLabel = styled.span`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${(props) => props.theme.corAcento};
  background: ${(props) => props.theme.corAcento}12;
  border: 1px solid ${(props) => props.theme.corAcento}30;
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 16px;
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
