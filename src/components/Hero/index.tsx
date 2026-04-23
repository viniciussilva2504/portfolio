import {
  HeroWrapper,
  HeroLabel,
  HeroHeading,
  HeroSubheading,
  HeroLocation,
} from './styles'

const Hero = () => (
  <HeroWrapper>
    <HeroLabel>// Hello, world</HeroLabel>
    <HeroHeading>
      Hi, I&apos;m <span>Vinicius</span>.
      <br />
      I build for the web.
    </HeroHeading>
    <HeroSubheading>
      Full Stack Dev · QA Engineer · React · TypeScript · Python
    </HeroSubheading>
    <HeroLocation>📍 Porto, Portugal — Open to remote &amp; hybrid roles in Europe</HeroLocation>
  </HeroWrapper>
)

export default Hero
