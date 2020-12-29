import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonPrimary } from '../buttons'
import { above } from '../../utils/breakpoints'

const CTA = props => {
  return (
    <CTASection>
      <h3>Check out what I've been working on.</h3>
      <p>
        Visit my GitHub page to see all of my personal projects and
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
  text-align: center;

  h3 {
    margin-bottom: 1.25rem;
  }

  p {
    width: 90%;
    max-width: 750px;
    margin: 0 auto 1.25rem;
  }
`

export default CTA
