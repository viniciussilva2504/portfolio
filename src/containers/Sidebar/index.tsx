import {
  HeaderBar,
  Identity,
  NavWrapper,
  NavList,
  NavLink,
  HeaderLinks,
} from './styles'

const NAV_ITEMS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Method', href: '#method' },
  { label: 'Projects', href: '#projects' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <HeaderBar>
      <Identity href="#top" aria-label="Vinicius Jesus da Silva, back to top">
        <span className="mark" aria-hidden="true">V</span>
        <span>Vinicius Jesus da Silva</span>
      </Identity>
      <NavWrapper aria-label="Main navigation">
        <NavList>
          {NAV_ITEMS.map((item) => <li key={item.href}><NavLink href={item.href}>{item.label}</NavLink></li>)}
        </NavList>
      </NavWrapper>
      <HeaderLinks>
        <a href="https://www.linkedin.com/in/vjsilva2504/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/viniciussilva2504" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </HeaderLinks>
    </HeaderBar>
  )
}
