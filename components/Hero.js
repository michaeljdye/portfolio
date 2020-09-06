import styled from '@emotion/styled'
import Header from './Header'

const Hero = () => (
  <HeroSection>
    <Header />
    <HeroContent>
      <h1>Never. Stop. Growing.</h1>
      <p>I am a growth-driven developer dedicated to building a better web.</p>
    </HeroContent>
  </HeroSection>
)

const HeroSection = styled.section`
  background: black;
  height: 55vh;
  border-bottom: 5px solid aqua;
`

const HeroContent = styled.div`
  margin: 100px auto;

  h1,
  p {
    color: white;
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
  }
`

export default Hero
