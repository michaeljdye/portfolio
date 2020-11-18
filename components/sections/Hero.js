import styled from '@emotion/styled'
import Header from '../layout/Header'
import ButtonPrimary from '../buttons/ButtonPrimary'
import { below } from '../../utils/breakpoints'

const Hero = () => (
  <HeroSection>
    <Header />
    <HeroContent>
      <h1>Build. Ship. Repeat.</h1>
      <p>I am a growth-driven developer dedicated to building a better web.</p>
      <ButtonContainer>
        <ButtonPrimary as='a' href='/pdfs/resume.pdf'>
          View Resume
        </ButtonPrimary>
        <ButtonPrimary as='a' href='#contact'>
          Contact Me
        </ButtonPrimary>
      </ButtonContainer>
    </HeroContent>
  </HeroSection>
)

const HeroSection = styled.section`
  background: url(/images/pattern-dark-triangle.jpg) center center;
  height: fit-content;
  padding: 10px 0 var(--defaultPadding);
  border-bottom: 6px solid var(--colorPrimary);
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  h1,
  p {
    color: white;
    text-align: center;
  }

  h1 {
    margin-bottom: 5px;
  }

  p {
    max-width: 90%;
    margin: 0 0 20px;
    font-size: max(2.5vw, 1.3rem);
  }
`

const ButtonContainer = styled.div`
  display: flex;

  a + a {
    margin-left: 20px;
  }
`

export default Hero
