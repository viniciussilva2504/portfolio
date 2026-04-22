import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import {
  Descricao,
  BotaoTema,
  SidebarContainer,
  StatusDot,
  StatusLine,
  SidebarLinks,
  SidebarLink,
} from './styles'

type Props = {
  trocarTema?: () => void
  estaUsandoTemaDark?: boolean
}

const Sidebar = (props: Props) => (
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
        {props.estaUsandoTemaDark ? '◑ LIGHT' : '◐ DARK'}
      </BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
