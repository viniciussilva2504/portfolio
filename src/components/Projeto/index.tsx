import { Card, CardHeading, CardType, CardDetails, Detail, TagsContainer, Tag, ProjectLinks, ProjectPreview } from './styles'

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
  previewImage?: string
  previewAlt?: string
}

export default function Projeto({ titulo, tipo, objetivo, abordagem, evidencia, link, tags, featured, githubLink, previewImage, previewAlt }: ProjetoProps) {
  return (
    <Card>
      <CardType>{tipo}</CardType>
      <CardHeading>{titulo}</CardHeading>
      {previewImage && <ProjectPreview><img src={previewImage} alt={previewAlt || ''} loading="lazy" /></ProjectPreview>}
      <CardDetails>
        <Detail><dt>Objective</dt><dd>{objetivo}</dd></Detail>
        <Detail><dt>{featured ? 'Test approach' : 'Engineering context'}</dt><dd>{abordagem}</dd></Detail>
        <Detail><dt>{featured ? 'QA evidence' : 'Project evidence'}</dt><dd>{evidencia}</dd></Detail>
      </CardDetails>
      {tags && <TagsContainer aria-label="Tools and technologies">{tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</TagsContainer>}
      <ProjectLinks>
        <a href={githubLink || link} target="_blank" rel="noreferrer">{featured ? 'Review test code' : 'View repository'} <span aria-hidden="true">↗</span></a>
        {githubLink && link !== githubLink && <a href={link} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>}
      </ProjectLinks>
    </Card>
  )
}
