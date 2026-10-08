import { Card, CardHeading, CardType, CardDetails, Detail, TagsContainer, Tag, ProjectLinks } from './styles'

export type ProjetoProps = {
  titulo: string
  tipo: string
  objetivo: string
  abordagem: string
  evidencia: string
  link: string
  tags?: string[]
  featured?: boolean
  githubLink?: string
}

export default function Projeto({ titulo, tipo, objetivo, abordagem, evidencia, link, tags, githubLink }: ProjetoProps) {
  return (
    <Card>
      <CardType>{tipo}</CardType>
      <CardHeading>{titulo}</CardHeading>
      <CardDetails>
        <Detail><dt>Objective</dt><dd>{objetivo}</dd></Detail>
        <Detail><dt>Approach / context</dt><dd>{abordagem}</dd></Detail>
        <Detail><dt>Evidence</dt><dd>{evidencia}</dd></Detail>
      </CardDetails>
      {tags && <TagsContainer aria-label="Tools and technologies">{tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</TagsContainer>}
      <ProjectLinks>
        <a href={githubLink || link} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
        {githubLink && link !== githubLink && <a href={link} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>}
      </ProjectLinks>
    </Card>
  )
}
