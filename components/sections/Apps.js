import styled from '@emotion/styled'
import scenes from '../../data/scenes.json'
import { SectionHeading } from '../headings'
import Slideshow from '../sliders/Slideshow'

const Apps = () => (
  <AppsSection id='apps'>
    <SectionHeading marginBottom='120'>
      engage your users <h2>Web Apps</h2>
    </SectionHeading>
    <Slideshow scenes={scenes} />
  </AppsSection>
)

const AppsSection = styled.section`
  background: var(--colorLightGray);
  padding: 0 0 var(--defaultPadding);
`

export default Apps
