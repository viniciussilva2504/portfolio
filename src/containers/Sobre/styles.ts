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

export const GithubCard = styled.a`
  background: ${(props) => props.theme.corFundo};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  border-radius: 8px;
  padding: 20px;
  min-width: 280px;
  max-width: 400px;
  text-decoration: none;
  color: ${(props) => props.theme.corPrincipal};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.corPrincipal};
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    margin: 8px 0;
    color: ${(props) => props.theme.corSecundaria};
  }

  .highlight {
    color: ${(props) => props.theme.corPrincipal};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`
