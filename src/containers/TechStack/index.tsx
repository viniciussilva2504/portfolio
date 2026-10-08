import { SectionLabel } from '../../styles'
import { ToolkitSection, SkillMatrix, SkillGroup, TechList, AdditionalWork } from './styles'

const skills = [
  { title: 'Testing', items: ['Cypress', 'Appium', 'Pytest', 'Robot Framework', 'React Testing Library', 'Manual testing'] },
  { title: 'API & data', items: ['Postman', 'REST API', 'SQL', 'PostgreSQL', 'Supabase'] },
  { title: 'Development', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Django', 'Node.js'] },
  { title: 'DevOps', items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Linux', 'CI/CD'] },
]

const additionalWork = [
  ['Claude Code Subagents', 'https://github.com/viniciussilva2504/awesome-claude-code-subagents'],
  ['AI Chat Automation', 'https://github.com/viniciussilva2504/ai-chat-automation'],
  ['Claude How-To', 'https://github.com/viniciussilva2504/claude-howto'],
  ['AI-Powered Portfolio', 'https://github.com/viniciussilva2504/portfolio'],
]

export default function TechStack() {
  return (
    <ToolkitSection id="toolkit" aria-labelledby="toolkit-title">
      <SectionLabel>04 / TECHNICAL TOOLKIT</SectionLabel>
      <h2 id="toolkit-title">Tools across the quality lifecycle</h2>
      <SkillMatrix>{skills.map((group) => <SkillGroup key={group.title}><h3>{group.title}</h3><TechList>{group.items.map((skill, index) => <li key={skill}><span className={index === 0 ? 'accent' : ''} aria-hidden="true" />{skill}</li>)}</TechList></SkillGroup>)}</SkillMatrix>
      <AdditionalWork aria-label="Additional software projects">
        <h3>Additional technical work</h3>
        {additionalWork.map(([title, url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{title} <span aria-hidden="true">↗</span></a>)}
      </AdditionalWork>
    </ToolkitSection>
  )
}
