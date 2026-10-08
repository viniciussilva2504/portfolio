import { HeroWrapper, HeroLabel, HeroHeading, HeroSubheading, HeroLocation, HeroActions, HeroAside } from './styles'

const GITHUB_STATS_URL = 'https://github-readme-stats.vercel.app/api?username=viniciussilva2504&show_icons=true&include_all_commits=true&hide_border=true&bg_color=FAFAF7&title_color=111111&icon_color=356AE6&text_color=4A4A4A'
const GITHUB_LANGUAGES_URL = 'https://github-readme-stats.vercel.app/api/top-langs/?username=viniciussilva2504&layout=compact&langs_count=7&hide_border=true&bg_color=FAFAF7&title_color=111111&text_color=4A4A4A'

export default function Hero() {
  return (
    <HeroWrapper id="top" aria-labelledby="hero-title">
      <div>
        <HeroLabel>QA ANALYST · SOFTWARE QUALITY</HeroLabel>
        <HeroHeading id="hero-title">Vinicius Jesus da Silva</HeroHeading>
        <HeroSubheading>QA Analyst <span aria-hidden="true">|</span> Software Testing <span aria-hidden="true">|</span> Test Automation</HeroSubheading>
        <p className="positioning">QA professional focused on software quality, test automation, API validation and reliable user experiences.</p>
        <HeroLocation>Porto, Portugal <span aria-hidden="true">·</span> Open to remote and hybrid roles in Europe</HeroLocation>
        <HeroActions>
          <a className="primary" href="#projects">View QA projects <span aria-hidden="true">↓</span></a>
          <a href="https://github.com/viniciussilva2504" target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/vjsilva2504/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </HeroActions>
      </div>
      <HeroAside aria-label="Professional focus">
        <div className="profile-focus">
          <img className="portrait" src="/images/vinicius-profile.jpg" alt="Vinicius Jesus da Silva" width="72" height="72" loading="eager" decoding="async" />
          <div className="focus-copy">
            <p>FOCUS AREAS</p>
            <ul><li>Manual &amp; automated testing</li><li>Web and API quality</li><li>Test design &amp; investigation</li></ul>
            <span className="index">01 / QUALITY</span>
          </div>
        </div>
        <div className="github-stats" aria-label="GitHub activity and language statistics">
          <img src={GITHUB_STATS_URL} alt="GitHub statistics including total commits, pull requests and stars" width="495" height="195" loading="eager" decoding="async" />
          <img src={GITHUB_LANGUAGES_URL} alt="Most-used programming languages on GitHub" width="320" height="165" loading="eager" decoding="async" />
        </div>
      </HeroAside>
    </HeroWrapper>
  )
}
