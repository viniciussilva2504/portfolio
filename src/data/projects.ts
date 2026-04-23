import type { ProjetoProps } from '../components/Projeto'

const projetos: ProjetoProps[] = [
  {
    titulo: 'eFood — Delivery Platform',
    descricao:
      'Full-featured food delivery app with auth, favorites, reviews, geolocation and Supabase backend. Built from scratch with complex state management via Redux and real-time data.',
    link: 'https://efood-parte-2.vercel.app',
    githubLink: 'https://github.com/viniciussilva2504/efood',
    tags: ['React', 'TypeScript', 'Redux', 'Supabase', 'ViaCEP'],
    featured: true,
  },
  {
    titulo: 'Portfolio — This Site',
    descricao:
      'Personal portfolio built with Next.js 15 App Router, styled-components 6 ThemeProvider, dark/light theming, Starfield animation and lazy-loaded sections.',
    link: 'https://portfolio-ebon-nine-95.vercel.app',
    githubLink: 'https://github.com/viniciussilva2504/portfolio',
    tags: ['Next.js', 'React', 'TypeScript', 'styled-components'],
    featured: true,
  },
  {
    titulo: 'Social Media API',
    descricao:
      'Production-ready RESTful API for a social network — final course project. Endpoints for users, posts, follows and feed with Django REST Framework.',
    link: 'https://github.com/viniciussilva2504/social_media_API',
    tags: ['Python', 'Django', 'REST API', 'PostgreSQL'],
  },
  {
    titulo: 'Task Manager — Redux',
    descricao:
      'To-do app with complete CRUD, priority levels (Urgent/Important/Normal), status filters and Redux slices for tasks and filters. localStorage persistence.',
    link: 'https://minhas-tarefas-qbvq6g7hg-vinicius-silvas-projects-6f23ba6d.vercel.app/',
    githubLink: 'https://github.com/viniciussilva2504/minhas-tarefas',
    tags: ['React', 'TypeScript', 'Redux'],
  },
  {
    titulo: 'Cypress E2E Testing',
    descricao:
      'Automated end-to-end test suite covering web flows with Cypress — assertions, fixtures, custom commands and API mocking.',
    link: 'https://github.com/viniciussilva2504/exercicio-cypress',
    tags: ['Cypress', 'E2E Testing', 'QA', 'JavaScript'],
  },
  {
    titulo: 'Python Data Analysis',
    descricao:
      'Data extraction, web scraping and graphical analysis with Python — demonstrates backend and data skills beyond web development.',
    link: 'https://github.com/viniciussilva2504/extracao.py',
    tags: ['Python', 'Data Analysis', 'Web Scraping'],
  },
  {
    titulo: 'Contact List',
    descricao:
      'Contact manager with React and Redux — features search, edit and delete functionality',
    link: 'https://lista-de-contatos-react-iota-navy.vercel.app/',
    tags: ['React', 'TypeScript', 'Redux'],
  },
]

export default projetos
