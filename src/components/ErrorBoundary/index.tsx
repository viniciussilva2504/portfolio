'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

const ErrorContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${(props) => props.theme.corPrincipal};
`

const ErrorTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
`

const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.corSecundaria};
  margin-bottom: 20px;
`

const ReloadButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            An unexpected error occurred. Please try reloading the page.
          </ErrorMessage>
          <ReloadButton onClick={() => window.location.reload()}>
            Reload
          </ReloadButton>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
