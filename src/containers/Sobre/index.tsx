import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <br />
    <Paragrafo tipo="principal">
      Jr Front-end Dev. Hands-on experience with core front-end technologies
      such as HTML, CSS, JavaScript and SCSS. Frameworks like React and Vue.js,
      with a focus on building responsive and user-friendly interfaces.
      Bootstrap, TypeScript, LESS, SASS and task automation tools like Gulp and
      Webpack. Git version control and GitHub for collaboration and code
      management, component-based architecture and performance optimization.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=viniciussilva2504&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="GitHub Stats do Vinicius Silva"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=viniciussilva2504&layout=compact&langs_count=7&theme=dracula"
        alt="Linguagens mais utilizadas do Vinicius Silva"
      />
    </GithubSecao>
  </section>
)

export default Sobre
