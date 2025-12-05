import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/title'
import { GithubSecao, GithubCard } from './styles'

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
      <GithubCard href="https://github.com/viniciussilva2504" target="_blank" rel="noopener noreferrer">
        <h3>📊 GitHub Stats</h3>
        <p>🔥 Total de Commits: <span className="highlight">800+</span></p>
        <p>⭐ Total de Stars: <span className="highlight">15+</span></p>
        <p>📂 Repositórios Públicos: <span className="highlight">25+</span></p>
        <p>👥 Seguidores: <span className="highlight">10+</span></p>
      </GithubCard>
      <GithubCard href="https://github.com/viniciussilva2504" target="_blank" rel="noopener noreferrer">
        <h3>💻 Linguagens Mais Usadas</h3>
        <p>🟨 JavaScript / TypeScript</p>
        <p>🔵 CSS / SCSS</p>
        <p>🟠 HTML</p>
        <p>🟢 Vue.js / React</p>
      </GithubCard>
    </GithubSecao>
  </section>
)

export default Sobre
