import {
  CalculadoraAritmetica,
  CalculadoraImcReact,
  EbacTechTalks,
  MktGaleria,
  ProjetoDisneyPlus
} from '../../components/Projeto'
import Title from '../../components/title'

import { Lista } from './styles'

const projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <br />
    <Lista>
      <li>
        <ProjetoDisneyPlus />
      </li>
      <li>
        <CalculadoraAritmetica />
      </li>
      <li>
        <CalculadoraImcReact />
      </li>
      <li>
        <EbacTechTalks />
      </li>
      <li>
        <MktGaleria />
      </li>
    </Lista>
  </section>
)

export default projetos
