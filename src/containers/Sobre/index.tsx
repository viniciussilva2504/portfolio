'use client'

import { useTheme } from 'styled-components'
import Paragrafo from '../../components/Paragrafo'
import { SectionLabel } from '../../styles'
import { GithubSecao, SkillGrid, SkillBadge, SobreContainer } from './styles'

const STATS_BASE = 'https://github-readme-stats-sigma-five.vercel.app/api'
const COMMON = 'username=viniciussilva2504&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true'

const Sobre = () => {
  const theme = useTheme() as { corFundo: string }
  const isDark = theme.corFundo === '#0a0c10'
  const themeColors = isDark
    ? 'bg_color=0a0c10&title_color=00e5ff&icon_color=00e5ff&text_color=e2e8f0'
    : 'bg_color=f8fafc&title_color=0284c7&icon_color=0284c7&text_color=0f172a'

  const statsUrl = `${STATS_BASE}?${COMMON}&${themeColors}`
  const langsUrl = `${STATS_BASE}/top-langs/?username=viniciussilva2504&layout=compact&langs_count=7&theme=tokyonight&hide_border=true&${themeColors}`

  return (
    <SobreContainer id="about">
      <SectionLabel>01 // ABOUT</SectionLabel>
      <br />
      <br />
      <Paragrafo tipo="principal">
        Frontend Developer with hands-on experience building responsive,
        user-friendly interfaces with React, TypeScript, Redux and
        styled-components. Skilled in automated testing with Cypress E2E and
        React Testing Library. Background in Architecture that sharpens my eye
        for UX, layout systems and visual detail. Comfortable with Python, REST
        APIs, Supabase and Git-based workflows. Leveraging AI tools like Claude
        Code for accelerated development and code quality.
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
        <img src={statsUrl} alt="GitHub Stats do Vinicius Silva" />
        <img src={langsUrl} alt="Linguagens mais utilizadas do Vinicius Silva" />
      </GithubSecao>
    </SobreContainer>
  )
}

export default Sobre
