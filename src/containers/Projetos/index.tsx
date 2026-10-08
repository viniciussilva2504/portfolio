import Projeto from '../../components/Projeto'
import projetos from '../../data/projects'
import { SectionLabel } from '../../styles'
import { Lista, ProjectsSection, SectionIntro } from './styles'

export default function Projetos() {
  return (
    <ProjectsSection id="projects" aria-labelledby="projects-title">
      <SectionIntro>
        <SectionLabel>03 / SELECTED WORK</SectionLabel>
        <h2 id="projects-title">Testing practice &amp; engineering context</h2>
        <p>QA work is presented with its scope and available evidence. Software projects provide context on how the systems under test are built.</p>
      </SectionIntro>
      <Lista>{projetos.map((projeto) => <li key={projeto.link + projeto.titulo}><Projeto {...projeto} /></li>)}</Lista>
    </ProjectsSection>
  )
}
