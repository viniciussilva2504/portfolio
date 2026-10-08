import Projeto from '../../components/Projeto'
import projetos from '../../data/projects'
import { SectionLabel } from '../../styles'
import { Lista, ProjectsSection, SectionIntro } from './styles'

export default function Projetos() {
  const projetosQA = projetos.filter((projeto) => projeto.featured)
  const projetosComplementares = projetos.filter((projeto) => !projeto.featured)

  return (
    <ProjectsSection id="projects" aria-labelledby="projects-title">
      <SectionIntro>
        <SectionLabel>03 / SELECTED WORK</SectionLabel>
        <h2 id="projects-title">QA testing &amp; automation</h2>
        <p>Start with hands-on testing work. Each project shows its test approach, tools and repository evidence.</p>
      </SectionIntro>
      <Lista aria-label="QA testing and automation projects">
        {projetosQA.map((projeto) => <li key={projeto.link + projeto.titulo}><Projeto {...projeto} /></li>)}
      </Lista>
      {projetosComplementares.length > 0 && (
        <>
          <SectionIntro className="supporting-heading">
            <h3>Engineering context</h3>
            <p>Development projects that provide context on how software systems are built.</p>
          </SectionIntro>
          <Lista aria-label="Supporting software projects">
            {projetosComplementares.map((projeto) => <li key={projeto.link + projeto.titulo}><Projeto {...projeto} /></li>)}
          </Lista>
        </>
      )}
    </ProjectsSection>
  )
}
