import styled from '@emotion/styled'
import Header from '../layout/Header'
import ButtonPrimary from '../buttons/ButtonPrimary'

const Hero = ({ heading, subheading }) => (
  <HeroSection bottomPadding={heading ? 'var(--defaultPadding)' : null}>
    <Header />
    {heading && (
      <HeroContent>
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <ButtonContainer>
          <ButtonPrimary as='a' href='/pdfs/resume.pdf'>
            View Resume
          </ButtonPrimary>
          <ButtonPrimary as='a' href='#contact'>
            Contact Me
          </ButtonPrimary>
        </ButtonContainer>
      </HeroContent>
    )}
  </HeroSection>
)

const HeroSection = styled.section`
  background: var(--heroBackground);
  padding: 2vw 0 ${({ bottomPadding = '2vw' }) => bottomPadding};
  border-bottom: 0.375rem solid var(--colorPrimary);
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.75rem;

  h1,
  p {
    color: var(--colorWhite);
    text-align: center;
  }

  h1 {
    margin-bottom: 0.3125rem;
  }

  p {
    max-width: 90%;
    margin: 0 0 1.25rem;
    font-size: max(2.5vw, 1.3rem);
  }
`

const ButtonContainer = styled.div`
  display: flex;

  a + a {
    margin-left: 1.25rem;
  }
`

export default Hero
