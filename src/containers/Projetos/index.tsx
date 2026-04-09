import Projeto from '../../components/Projeto'
import type { ProjetoProps } from '../../components/Projeto'
import Title from '../../components/title'

import { Lista } from './styles'

const projetos: ProjetoProps[] = [
  {
    titulo: 'Projeto eFood API',
    descricao: 'API RESTful para um aplicativo de delivery de comida',
    link: 'https://efood-api-mu.vercel.app/',
  },
  {
    titulo: 'Projeto Clone Disney+',
    descricao: 'Front-end clone da interface do Disney+ usando React',
    link: 'https://clone-disneyplus-mu-two.vercel.app/',
  },
  {
    titulo: 'Evento Fictício',
    descricao: 'EBAC Tech Talks - Divulgação de evento fictício',
    link: 'https://ebac-tech-talks-azure-seven.vercel.app/',
  },
  {
    titulo: 'Lista de Tarefas',
    descricao: 'Gerenciador de tarefas desenvolvido com React',
    link: 'https://minhas-tarefas-qbvq6g7hg-vinicius-silvas-projects-6f23ba6d.vercel.app/',
  },
  {
    titulo: 'Lista de Contatos',
    descricao: 'Gerenciador de contatos desenvolvido com React',
    link: 'https://lista-de-contatos-react-iota-navy.vercel.app/',
  },
  {
    titulo: 'Calculadora Aritmética Vue.js',
    descricao: 'Calculadora Aritmética desenvolvida com Vue.js',
    link: 'https://calculadora-vuejs-theta.vercel.app/',
  },
  {
    titulo: 'Calculadora IMC React',
    descricao: 'Calculadora de IMC desenvolvida com React',
    link: 'https://calc-imc-reactjs-jade.vercel.app/',
  },
  {
    titulo: 'Galeria de Arte - Proj. HTML',
    descricao: 'Projeto HTML/CSS de uma galeria de arte fictícia',
    link: 'https://email-mkt-galeria.vercel.app/',
  },
  {
    titulo: 'Calculadora de Médias Escolares',
    descricao: 'Calculadora de médias escolares em React',
    link: 'https://calculadora-medias-proj.vercel.app/',
  },
  {
    titulo: 'Teste Automatizado com Cypress',
    descricao: 'Teste automatizado de API web em Cypress',
    link: 'https://github.com/viniciussilva2504/exercicio-cypress.git',
  },
  {
    titulo: 'Dados com Python',
    descricao: 'Produção de dados gráficos e análises utilizando Python',
    link: 'https://github.com/viniciussilva2504/extracao.py.git',
  },
]

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projects</Title>
    <br />
    <Lista>
      {projetos.map((projeto) => (
        <li key={projeto.link}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
          />
        </li>
      ))}
    </Lista>
  </section>
)

export default Projetos
