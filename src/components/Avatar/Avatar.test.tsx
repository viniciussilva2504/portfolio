import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Avatar from '.'
import themaLight from '../../themes/light'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={themaLight}>{ui}</ThemeProvider>)

describe('Avatar', () => {
  it('renders the profile image', () => {
    renderWithTheme(<Avatar />)
    const img = screen.getByAltText('Foto de perfil de Vinicius J. Silva')
    expect(img).toBeInTheDocument()
  })

  it('has the correct src attribute', () => {
    renderWithTheme(<Avatar />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute(
      'src',
      'https://github.com/viniciussilva2504.png'
    )
  })
})
