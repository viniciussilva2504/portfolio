import {
  ProjetoDisneyPlus,
  EbacTechTalks,
  ListaDeTarefas,
  ListaDeContatos,
  CalculadoraAritmetica,
  CalculadoraImcReact,
  CalculadoraMediasEscolares,
  MktGaleria,
  TesteCypress,
  ProdDadosPython,
} from '../../components/Projeto'
import Title from '../../components/title'

import { Lista } from './styles'

const Projetos = () => (
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
      // ...Efood removido...
      <li>
        <ListaDeTarefas />
      </li>
      <li>
        <ListaDeContatos />
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
        <CalculadoraMediasEscolares />
      </li>
      <li>
        <TesteCypress />
      </li>
      <li>
        <ProdDadosPython />
      </li>
    </Lista>
  </section>
)

export default Projetos
