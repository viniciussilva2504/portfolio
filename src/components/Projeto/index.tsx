import Paragrafo from '../Paragrafo'
import Title from '../title'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Title>Projeto lista de tarefas</Title>
      <Paragrafo tipo="secundario">Lista de tarefas em VueJS</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
