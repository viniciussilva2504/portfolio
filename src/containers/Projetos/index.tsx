import {
  CalculadoraAritmetica,
  EbacTechTalks,
  CalculadoraImcReact,
  CalculadoraMediasEscolares,
  LandingPageStarTrek,
  MktGaleria,
  ProjetoDisneyPlus
} from '../../components/Projeto'
import Title from '../../components/title'

import { Lista } from './styles'

const projetos = () => (
  <section>
    <Title fontSize={16}>Projects</Title>
    <br />
    <Lista>
      <li>
        <ProjetoDisneyPlus />
      </li>
      <li>
        <EbacTechTalks />
      </li>
      <li>
        <CalculadoraAritmetica />
      </li>
      <li>
        <CalculadoraImcReact />
      </li>
      <li>
        <MktGaleria />
      </li>
      <li>
        <LandingPageStarTrek />
      </li>
      <li>
        <CalculadoraMediasEscolares />
      </li>
    </Lista>
  </section>
)

export default projetos
