import { Card, LinkBotao, GitHubBotao, BotoesContainer, FeaturedBadge, TagsContainer, Tag } from './styles'
import Title from '../Title'
import Paragrafo from '../Paragrafo'

export type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
  tags?: string[]
  featured?: boolean
  githubLink?: string
}

const Projeto = ({ titulo, descricao, link, tags, featured, githubLink }: ProjetoProps) => (
  <Card $featured={featured}>
    {featured && <FeaturedBadge>⭐ FEATURED</FeaturedBadge>}
    <Title>{titulo}</Title>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    {tags && (
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    )}
    <BotoesContainer>
      <LinkBotao href={link} target="_blank" rel="noopener noreferrer">
        {featured ? 'Ver Demo ↗' : 'Visualizar'}
      </LinkBotao>
      {githubLink && (
        <GitHubBotao href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </GitHubBotao>
      )}
    </BotoesContainer>
  </Card>
)

export default Projeto
