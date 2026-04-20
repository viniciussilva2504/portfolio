import { Card, LinkBotao, TagsContainer, Tag } from './styles'
import Title from '../Title'
import Paragrafo from '../Paragrafo'

export type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
  tags?: string[]
}

const Projeto = ({ titulo, descricao, link, tags }: ProjetoProps) => (
  <Card>
    <Title>{titulo}</Title>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    {tags && (
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    )}
    <LinkBotao href={link} target="_blank" rel="noopener noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
