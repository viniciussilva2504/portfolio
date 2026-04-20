import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Sidebar from '.'
import themaLight from '../../themes/light'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={themaLight}>{ui}</ThemeProvider>)

describe('Sidebar', () => {
  it('renders the name', () => {
    renderWithTheme(<Sidebar />)
    expect(screen.getByText('Vinicius J. Silva')).toBeInTheDocument()
  })

  it('renders the role', () => {
    renderWithTheme(<Sidebar />)
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
  })

  it('renders the stack description', () => {
    renderWithTheme(<Sidebar />)
    expect(screen.getByText('React · TypeScript · Cypress')).toBeInTheDocument()
  })

  it('shows light mode toggle text when in light mode', () => {
    renderWithTheme(<Sidebar estaUsandoTemaDark={false} />)
    expect(screen.getByText('🌙 DARK')).toBeInTheDocument()
  })

  it('shows dark mode toggle text when in dark mode', () => {
    renderWithTheme(<Sidebar estaUsandoTemaDark={true} />)
    expect(screen.getByText('☀️ LIGHT')).toBeInTheDocument()
  })

  it('calls trocarTema when button is clicked', () => {
    const trocarTema = jest.fn()
    renderWithTheme(<Sidebar trocarTema={trocarTema} />)
    screen.getByText('🌙 DARK').click()
    expect(trocarTema).toHaveBeenCalledTimes(1)
  })
})
