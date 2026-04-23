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
        Full Stack Developer and QA Engineer with a strong focus on React,
        TypeScript and Python. I build responsive, accessible interfaces with
        React 19, Redux and styled-components, and automate quality assurance
        with Cypress E2E, React Testing Library and Jest. Full stack capabilities
        include Python (Django, Flask), REST APIs and Supabase. Currently
        specialising in QA Engineering — 60% through two parallel QA bootcamps.
        Architecture background that sharpens UX thinking and visual systems.
        Leveraging AI tools like Claude Code for quality-driven, accelerated
        development.
      </Paragrafo>
      <SkillGrid>
        <SkillBadge>React</SkillBadge>
        <SkillBadge>TypeScript</SkillBadge>
        <SkillBadge>Next.js</SkillBadge>
        <SkillBadge>Redux</SkillBadge>
        <SkillBadge>styled-components</SkillBadge>
        <SkillBadge $variant="secondary">Cypress E2E</SkillBadge>
        <SkillBadge $variant="secondary">React Testing Library</SkillBadge>
        <SkillBadge $variant="secondary">Jest</SkillBadge>
        <SkillBadge $variant="secondary">QA Engineering</SkillBadge>
        <SkillBadge $variant="accent">Python</SkillBadge>
        <SkillBadge $variant="accent">Django</SkillBadge>
        <SkillBadge $variant="accent">Flask</SkillBadge>
        <SkillBadge $variant="accent">REST APIs</SkillBadge>
        <SkillBadge>Supabase</SkillBadge>
        <SkillBadge>Git</SkillBadge>
        <SkillBadge>Claude Code</SkillBadge>
      </SkillGrid>
      <GithubSecao>
        <img src={statsUrl} alt="GitHub Stats do Vinicius Silva" />
        <img src={langsUrl} alt="Linguagens mais utilizadas do Vinicius Silva" />
      </GithubSecao>
    </SobreContainer>
  )
}

export default Sobre
