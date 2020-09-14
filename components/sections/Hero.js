import styled from '@emotion/styled'
import Header from '../layout/Header'
import ButtonPrimary from '../buttons/ButtonPrimary'

const Hero = () => (
  <HeroSection>
    <Header />
    <HeroContent>
      <h1>Lorem. Ipsum. Dolor.</h1>
      <p>I am a growth-driven developer dedicated to building a better web.</p>
      <ButtonContainer>
        <ButtonPrimary>View Resume</ButtonPrimary>
        <ButtonPrimary>Contact Me</ButtonPrimary>
      </ButtonContainer>
    </HeroContent>
  </HeroSection>
)

const HeroSection = styled.section`
  background: url(/images/pattern-dark-triangle.jpg);
  height: 55vh;
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

  p {
    font-size: 1.5rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;

  button + button {
    margin-left: 20px;
  }
`

export default Hero
