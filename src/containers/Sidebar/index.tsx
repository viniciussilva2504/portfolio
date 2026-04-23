'use client'

import { useState, useEffect } from 'react'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import {
  Descricao,
  BotaoTema,
  CVLink,
  SidebarContainer,
  StatusDot,
  StatusLine,
  SidebarLinks,
  SidebarLink,
  NavWrapper,
  NavList,
  NavItem,
  NavLink,
  NavLine,
} from './styles'

type Props = {
  trocarTema?: () => void
  estaUsandoTemaDark?: boolean
}

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'AI TOOLING', href: '#ai', id: 'ai' },
]

const Sidebar = (props: Props) => {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-10% 0px -65% 0px' }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Vinicius J. Silva</Title>
        <Paragrafo tipo="secundario" fontSize={14}>
          Frontend Developer
        </Paragrafo>
        <Descricao tipo="principal" fontSize={11}>
          React · TypeScript · Cypress
        </Descricao>
        <Paragrafo tipo="secundario" fontSize={11}>
          Open to work — Porto, PT
        </Paragrafo>
        <StatusLine>
          <StatusDot />
          Available
        </StatusLine>

        <NavWrapper>
          <NavList>
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href}>
                <NavLink href={item.href} $active={activeSection === item.id}>
                  <NavLine $active={activeSection === item.id} />
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavWrapper>

        <CVLink
          href="/CV_Vinicius_Silva_Frontend.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          ↓ Download CV
        </CVLink>
        <SidebarLinks>
          <SidebarLink
            href="https://github.com/viniciussilva2504"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </SidebarLink>
          <SidebarLink
            href="https://www.linkedin.com/in/vjsilva2504/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </SidebarLink>
          <SidebarLink href="mailto:vinicius.silva2504@gmail.com">
            Email ↗
          </SidebarLink>
        </SidebarLinks>
        <br />
        <BotaoTema onClick={props.trocarTema}>
          {props.estaUsandoTemaDark ? '☀️ LIGHT' : '🌙 DARK'}
        </BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
