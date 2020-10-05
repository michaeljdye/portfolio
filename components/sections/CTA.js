import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonPrimary } from '../buttons'

const CTA = props => {
  return (
    <CTASection>
      <h3>Catchy Question Goes Here?</h3>
      <p>
        Here goes some text to engage the user and get them to take some sort of
        action by clicking the button below
      </p>
      <ButtonPrimary dark>View Portfolio</ButtonPrimary>
    </CTASection>
  )
}

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  background: var(--colorLightGray);
  padding: 60px 0;

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
