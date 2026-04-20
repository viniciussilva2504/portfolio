import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Paragrafo from '.'
import themaLight from '../../themes/light'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={themaLight}>{ui}</ThemeProvider>)

describe('Paragrafo', () => {
  it('renders the children text', () => {
    renderWithTheme(<Paragrafo>Hello World</Paragrafo>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('defaults to tipo principal', () => {
    renderWithTheme(<Paragrafo>Default text</Paragrafo>)
    const p = screen.getByText('Default text')
    expect(p).toHaveStyle(`color: ${themaLight.corPrincipal}`)
  })

  it('applies tipo secundario color', () => {
    renderWithTheme(<Paragrafo tipo="secundario">Secondary</Paragrafo>)
    const p = screen.getByText('Secondary')
    expect(p).toHaveStyle(`color: ${themaLight.corSecundaria}`)
  })

  it('applies custom fontSize', () => {
    renderWithTheme(<Paragrafo fontSize={20}>Sized</Paragrafo>)
    const p = screen.getByText('Sized')
    expect(p).toHaveStyle('font-size: 20px')
  })
})
