import Projeto from '../../components/Projeto'
import projetos from '../../data/projects'
import { SectionLabel } from '../../styles'

import { Lista } from './styles'

const Projetos = () => (
  <section id="projects">
    <SectionLabel>02 // PROJECTS</SectionLabel>
    <br />
    <br />
    <Lista>
      {projetos.map((projeto) => (
        <li key={projeto.link} className={projeto.featured ? 'featured' : ''}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
            tags={projeto.tags}
            featured={projeto.featured}
            githubLink={projeto.githubLink}
          />
        </li>
      ))}
    </Lista>
  </section>
)

export default Projetos
