import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  list-style: none;
  @media (max-width: 768px) {
      padding-top: 16px;
    }
  }

body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => (props.theme as theme).corFundo};

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px; // Espaçamento entre colunas

  img {
    max-width: 100%;
  }
`
