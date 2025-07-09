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
