import { render, screen } from '@testing-library/react'
import Sidebar from '.'

describe('Header navigation', () => {
  it('renders the portfolio identity and primary navigation', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: /Vinicius Jesus da Silva/i })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
  })

  it('provides professional profile links', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/vjsilva2504/')
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/viniciussilva2504')
  })
})
