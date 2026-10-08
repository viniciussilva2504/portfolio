import { render, screen } from '@testing-library/react'
import Projeto from '.'

describe('Project card', () => {
  const props = {
    titulo: 'Cypress E2E Testing',
    tipo: 'Web · End-to-end automation',
    objetivo: 'Automate browser-level validation of web user flows.',
    abordagem: 'Test repository with fixtures and API mocking.',
    evidencia: 'Cypress test repository',
    link: 'https://github.com/example/project',
    tags: ['Cypress', 'E2E'],
  }

  it('renders objective, approach and evidence', () => {
    render(<Projeto {...props} />)
    expect(screen.getByRole('heading', { name: props.titulo })).toBeInTheDocument()
    expect(screen.getByText(props.objetivo)).toBeInTheDocument()
    expect(screen.getByText(props.abordagem)).toBeInTheDocument()
    expect(screen.getByText(props.evidencia)).toBeInTheDocument()
  })

  it('renders repository and technology links with accessible names', () => {
    render(<Projeto {...props} />)
    expect(screen.getByRole('link', { name: /View repository/i })).toHaveAttribute('href', props.link)
    expect(screen.getByText('Cypress')).toBeInTheDocument()
    expect(screen.getByText('E2E')).toBeInTheDocument()
  })

  it('shows a separate project link when the repository differs', () => {
    render(<Projeto {...props} githubLink="https://github.com/example/project" />)
    expect(screen.getByRole('link', { name: /View project/i })).toHaveAttribute('href', props.link)
  })
})
