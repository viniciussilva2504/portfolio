import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
