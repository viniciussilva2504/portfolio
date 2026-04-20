import Paragrafo from '../../components/Paragrafo'
import { SectionLabel } from '../../styles'
import { GithubSecao, SkillGrid, SkillBadge, SobreContainer } from './styles'

const Sobre = () => (
  <SobreContainer>
    <SectionLabel>01 // ABOUT</SectionLabel>
    <br />
    <br />
    <Paragrafo tipo="principal">
      Frontend Developer with hands-on experience building responsive,
      user-friendly interfaces with React, TypeScript, Redux and
      styled-components. Skilled in automated testing with Cypress E2E and React
      Testing Library. Background in Architecture that sharpens my eye for UX,
      layout systems and visual detail. Comfortable with Python, REST APIs,
      Supabase and Git-based workflows. Leveraging AI tools like Claude Code for
      accelerated development and code quality.
    </Paragrafo>
    <SkillGrid>
      <SkillBadge>React</SkillBadge>
      <SkillBadge>TypeScript</SkillBadge>
      <SkillBadge>Redux</SkillBadge>
      <SkillBadge>styled-components</SkillBadge>
      <SkillBadge>Next.js</SkillBadge>
      <SkillBadge $variant="secondary">Cypress E2E</SkillBadge>
      <SkillBadge $variant="secondary">React Testing Library</SkillBadge>
      <SkillBadge $variant="secondary">Jest</SkillBadge>
      <SkillBadge $variant="accent">Claude Code</SkillBadge>
      <SkillBadge $variant="accent">AI Agents</SkillBadge>
      <SkillBadge $variant="accent">Python</SkillBadge>
      <SkillBadge>Git</SkillBadge>
      <SkillBadge>Supabase</SkillBadge>
      <SkillBadge>REST APIs</SkillBadge>
    </SkillGrid>
    <GithubSecao>
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=viniciussilva2504&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&bg_color=0a0c10&hide_border=true&title_color=00e5ff&icon_color=00e5ff&text_color=e2e8f0"
        alt="GitHub Stats do Vinicius Silva"
      />
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=viniciussilva2504&layout=compact&langs_count=7&theme=tokyonight&bg_color=0a0c10&hide_border=true&title_color=00e5ff&text_color=e2e8f0"
        alt="Linguagens mais utilizadas do Vinicius Silva"
      />
    </GithubSecao>
  </SobreContainer>
)

export default Sobre
