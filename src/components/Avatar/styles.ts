import styled from 'styled-components'

export const FotoPerfil = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 0;
  margin-bottom: 24px;
  border: 1px solid ${(props) => props.theme.corDaBorda};
  filter: grayscale(100%) contrast(1.1);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%) contrast(1);
  }
`
