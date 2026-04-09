import { Card, LinkBotao } from './styles'
import Title from '../title'
import Paragrafo from '../Paragrafo'

export type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = ({ titulo, descricao, link }: ProjetoProps) => (
  <Card>
    <Title>{titulo}</Title>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={link} target="_blank" rel="noopener noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
