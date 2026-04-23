import Paragrafo from '../../components/Paragrafo'
import { SectionLabel } from '../../styles'
import {
  AIContainer,
  AIGrid,
  AICard,
  AICardTitle,
  AICardDesc,
} from './styles'

const qaItems = [
  {
    title: 'Cypress E2E Test Suite',
    desc: 'Automated end-to-end tests covering user flows, API interactions and UI assertions. DOM queries, fixtures and custom commands.',
    link: 'https://github.com/viniciussilva2504/exercicio-cypress',
  },
  {
    title: 'React Testing Library — eFood',
    desc: 'Component and integration tests on a production delivery platform. render, userEvent, waitFor and mock strategies.',
    link: 'https://github.com/viniciussilva2504/efood',
  },
  {
    title: 'QA Bootcamps (in progress)',
    desc: 'Two parallel QA Engineering bootcamps — 60% complete. Manual testing, test planning, bug reporting, automation with Cypress and Jest.',
    link: 'https://github.com/viniciussilva2504',
  },
  {
    title: 'Quality Strategy',
    desc: 'Test plans, acceptance criteria and bug triage on real user stories. Covers unit, integration and E2E layers across React + Python projects.',
    link: 'https://github.com/viniciussilva2504',
  },
]

const aiItems = [
  {
    title: 'Claude Code Subagents',
    desc: 'Curated collection of Claude Code subagent patterns for automated coding workflows',
    link: 'https://github.com/viniciussilva2504/awesome-claude-code-subagents',
  },
  {
    title: 'AI Chat Automation',
    desc: 'Python-based AI chat automation system leveraging LLM capabilities',
    link: 'https://github.com/viniciussilva2504/ai-chat-automation',
  },
  {
    title: 'Claude How-To',
    desc: 'Practical guides and best practices for working with Claude AI tools',
    link: 'https://github.com/viniciussilva2504/claude-howto',
  },
  {
    title: 'AI-Powered Portfolio',
    desc: 'This portfolio was built with Claude Code — dark design system, subagents, ISR, styled-components theming',
    link: 'https://github.com/viniciussilva2504/portfolio',
  },
]

const AISkills = () => (
  <AIContainer id="ai">
    <SectionLabel>03 // QA &amp; AI TOOLING</SectionLabel>
    <br />
    <br />
    <Paragrafo tipo="principal">
      Quality engineering across the full stack — automated E2E with Cypress,
      component tests with React Testing Library, and test planning on real
      projects. Accelerated by AI tools: Claude Code and custom subagents for
      faster, higher-quality delivery.
    </Paragrafo>

    <SectionLabel style={{ marginTop: '24px', marginBottom: '8px' }}>// QA TESTING</SectionLabel>
    <AIGrid>
      {qaItems.map((item) => (
        <AICard
          key={item.link + item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AICardTitle>↗ {item.title}</AICardTitle>
          <AICardDesc>{item.desc}</AICardDesc>
        </AICard>
      ))}
    </AIGrid>

    <SectionLabel style={{ marginTop: '28px', marginBottom: '8px' }}>// AI TOOLING</SectionLabel>
    <AIGrid>
      {aiItems.map((tool) => (
        <AICard
          key={tool.link + tool.title}
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AICardTitle>↗ {tool.title}</AICardTitle>
          <AICardDesc>{tool.desc}</AICardDesc>
        </AICard>
      ))}
    </AIGrid>
  </AIContainer>
)

export default AISkills
