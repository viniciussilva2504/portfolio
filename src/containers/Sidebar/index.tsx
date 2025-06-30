import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Vinicius J. Silva</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        Vinicius J. Silva
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev. front-end | cursando
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
