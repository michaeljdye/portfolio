import styled from '@emotion/styled'
import scenes from '../../data/scenes.json'
import { SectionHeading } from '../headings'
import Slideshow from '../sliders/Slideshow'
import { above } from '../../utils'

const Apps = () => (
  <AppsSection id='apps'>
    <SectionHeading marginBottom='120'>
      engage your users <h2>Web Apps</h2>
    </SectionHeading>
    <Slideshow scenes={scenes} />
  </AppsSection>
)

const AppsSection = styled.section`
  background: var(--appsBackground);
  padding: 0 0 var(--defaultPadding);
  margin-bottom: 20px;
  color: var(--appsColor);

  ${above.tablet`
      margin-bottom: 0;
    `}
`

export default Apps
