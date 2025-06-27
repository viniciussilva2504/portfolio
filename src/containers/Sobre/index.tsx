import exp from 'constants'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. ligendi labore
      odio repellat magni quaerat, doloremque consectetur soluta sed,
      repudiandae sequi natus eius ab voluptas libero adipisci accusamus!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=viniciussilva2504&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=viniciussilva2504&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
