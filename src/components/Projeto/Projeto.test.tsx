import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Projeto from '.'
import themaLight from '../../themes/light'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={themaLight}>{ui}</ThemeProvider>)

describe('Projeto', () => {
  const props = {
    titulo: 'Test Project',
    descricao: 'A test project description',
    link: 'https://example.com',
    tags: ['React', 'TypeScript'],
  }

  it('renders the project title', () => {
    renderWithTheme(<Projeto {...props} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders the project description', () => {
    renderWithTheme(<Projeto {...props} />)
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('renders a link with correct href and target', () => {
    renderWithTheme(<Projeto {...props} />)
    const link = screen.getByText('Visualizar')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders technology tags', () => {
    renderWithTheme(<Projeto {...props} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders without tags when not provided', () => {
    const { titulo, descricao, link } = props
    renderWithTheme(
      <Projeto titulo={titulo} descricao={descricao} link={link} />
    )
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })
})
