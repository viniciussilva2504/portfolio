import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Title from '.'
import themaLight from '../../themes/light'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={themaLight}>{ui}</ThemeProvider>)

describe('Title', () => {
  it('renders the children text', () => {
    renderWithTheme(<Title>My Title</Title>)
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('applies custom fontSize', () => {
    renderWithTheme(<Title fontSize={24}>Big Title</Title>)
    const heading = screen.getByText('Big Title')
    expect(heading).toHaveStyle('font-size: 24px')
  })

  it('defaults to 14px when no fontSize given', () => {
    renderWithTheme(<Title>Default</Title>)
    const heading = screen.getByText('Default')
    expect(heading).toHaveStyle('font-size: 14px')
  })
})
