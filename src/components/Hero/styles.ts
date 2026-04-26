import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

const cursorBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

export const HeroWrapper = styled.section`
  padding: 12px 0 48px;
  animation: ${fadeUp} 0.6s ease both;
`

export const HeroLabel = styled.span`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${(props) => props.theme.corAcento};
  display: block;
  margin-bottom: 16px;
  text-shadow:
    0 0 4px ${(props) => props.theme.corAcento},
    0 0 12px ${(props) => props.theme.corAcento}99,
    0 0 24px ${(props) => props.theme.corAcento}55,
    0 0 40px ${(props) => props.theme.corAcento}33;
`

export const HeroHeading = styled.h1`
  font-family: ${(props) => props.theme.fontSans};
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: ${(props) => props.theme.corPrincipal};
  line-height: 1.2;
  margin-bottom: 12px;
  letter-spacing: -0.5px;

  span {
    color: ${(props) => props.theme.corAcento};
  }

  &::after {
    content: '|';
    color: ${(props) => props.theme.corAcento};
    margin-left: 2px;
    animation: ${cursorBlink} 1s step-end infinite;
  }
`

export const HeroSubheading = styled.h2`
  font-family: ${(props) => props.theme.fontMono};
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 400;
  color: ${(props) => props.theme.corSecundaria};
  margin-bottom: 20px;
  line-height: 1.5;
`

export const HeroLocation = styled.p`
  font-family: ${(props) => props.theme.fontMono};
  font-size: 12px;
  color: ${(props) => props.theme.corSecundaria};
  letter-spacing: 1px;
  opacity: 0.7;
`
