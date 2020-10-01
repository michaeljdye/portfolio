import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonPrimary } from '../buttons'

const CTA = props => {
  return (
    <CTASection>
      <h2>Catchy Question Goes Here?</h2>
      <p>
        Here goes some text to engage the user and get them to take some sort of
        action by clicking the button below
      </p>
      <ButtonPrimary color='dark'>View Portfolio</ButtonPrimary>
    </CTASection>
  )
}

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  padding: 60px 0;
`

export default CTA
