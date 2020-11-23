import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonPrimary } from '../buttons'

const CTA = props => {
  return (
    <CTASection>
      <h3>Can't get enough code?</h3>
      <p>
        Check out my GitHub to see all of my personal projects and
        contributions.
      </p>
      <ButtonPrimary
        dark
        as='a'
        href='https://github.com/JoeyDye'
        target='_blank'
        rel='noreferrer nofollow'
      >
        View GitHub
      </ButtonPrimary>
    </CTASection>
  )
}

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  background: var(--colorLightGray);
  padding: var(--defaultPadding) 0;

  h3 {
    margin-bottom: 20px;
  }

  p {
    width: 750px;
    max-width: 90%;
    margin: 0 auto 20px;
    text-align: center;
  }
`

export default CTA
