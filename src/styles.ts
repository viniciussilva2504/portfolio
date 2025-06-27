import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;

.inter-<uniquifier> {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
}
body {
  padding-top: 80px;
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
