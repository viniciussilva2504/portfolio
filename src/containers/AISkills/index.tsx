import Paragrafo from '../../components/Paragrafo'
import { SectionLabel } from '../../styles'
import {
  AIContainer,
  AIGrid,
  AICard,
  AICardTitle,
  AICardDesc,
} from './styles'

const aiTools = [
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
    desc: 'This portfolio was built with Claude Code — cyberpunk design, subagents, automated testing',
    link: 'https://github.com/viniciussilva2504/portfolio',
  },
]

const AISkills = () => (
  <AIContainer>
    <SectionLabel>03 // AI TOOLING</SectionLabel>
    <br />
    <br />
    <Paragrafo tipo="principal">
      Using AI tools like Claude Code and custom subagents to accelerate
      development, automate testing workflows, and ship faster with higher code
      quality.
    </Paragrafo>
    <AIGrid>
      {aiTools.map((tool) => (
        <AICard
          key={tool.link}
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
