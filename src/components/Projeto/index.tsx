import { Card, LinkBotao } from './styles'
import Title from '../title'
import Paragrafo from '../Paragrafo'

export const ProjetoDisneyPlus = () => {
  return (
    <Card>
      <Title>Projeto Clone Disney+</Title>
      <Paragrafo tipo="secundario">
        Front-end clone da interface do Disney+ usando React
      </Paragrafo>
      <LinkBotao
        href="https://clone-disneyplus-mu-two.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        >
        Visualizar
      </LinkBotao>
    </Card>
  )
}
export const EbacTechTalks = () => {
  return (
    <Card>
      <Title>Evento Fictício</Title>
      <Paragrafo tipo="secundario">
        EBAC Tech Talks - Divulgação de evento fictício
      </Paragrafo>
      <LinkBotao
        href="https://ebac-tech-talks-azure-seven.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visualizar
      </LinkBotao>
    </Card>
  )
}
export const ListaDeTarefas = () => {
  return (
    <Card>
      <Title>Lista de Tarefas</Title>
      <Paragrafo tipo="secundario">
        Aplicação de gerenciamento de tarefas desenvolvida com React
      </Paragrafo>
      <LinkBotao
        href="https://minhas-tarefas-git-main-vinicius-silvas-projects-6f23ba6d.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visualizar
      </LinkBotao>
    </Card>
  )
}
export const ListaDeContatos = () => {
  return (
    <Card>
      <Title>Lista de Contatos</Title>
      <Paragrafo tipo="secundario">
        Aplicação de gerenciamento de contatos desenvolvida com React
      </Paragrafo>
      <LinkBotao
        href="https://lista-de-contatos-react-iota-navy.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visualizar
      </LinkBotao>
    </Card>
  )
}
export const CalculadoraAritmetica = () => {
  return (
    <Card>
      <Title>Calculadora Aritmética Vue.js</Title>
      <Paragrafo tipo="secundario">
        Calculadora Aritmética desenvolvida com Vue.js
      </Paragrafo>
      <LinkBotao
        href="https://calculadora-vuejs-theta.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visualizar
      </LinkBotao>
    </Card>
  )
}
export const CalculadoraImcReact = () => {
  return (
    <Card>
      <Title>Calculadora IMC React</Title>
      <Paragrafo tipo="secundario">
        Calculadora de IMC desenvolvida com React
      </Paragrafo>
      <LinkBotao
        href="https://calc-imc-reactjs-jade.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visualizar
      </LinkBotao>
    </Card>
  )
}
export const CalculadoraMediasEscolares = () => {
  return (
    <Card>
      <Title>Calculadora de Médias Escolares</Title>
      <Paragrafo tipo="secundario">
        Calculadora de médias escolares em React
      </Paragrafo>
      <LinkBotao
        href="https://calculadora-medias-proj.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visualizar
      </LinkBotao>
    </Card>
  )
}
export const MktGaleria = () => {
  return (
    <Card>
      <Title>Galeria de Arte - Proj. HTML</Title>
      <Paragrafo tipo="secundario">
        Projeto HTML/CSS de uma galeria de arte fictícia
      </Paragrafo>
      <LinkBotao
        href="https://email-mkt-galeria.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visualizar
      </LinkBotao>
    </Card>
  )
}

const Projetos = () => (
  <>
    <ProjetoDisneyPlus />
    <EbacTechTalks />
    <ListaDeTarefas />
    <ListaDeContatos />
    <CalculadoraAritmetica />
    <CalculadoraImcReact />
    <CalculadoraMediasEscolares />
    <MktGaleria />
  </>
)

export default Projetos
