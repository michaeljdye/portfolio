import styled from '@emotion/styled'
import scenes from '../../data/scenes.json'
import { SectionHeading } from '../headings'
import Carousel from '../sliders/Carousel'

const Apps = () => (
  <AppsSection>
    <SectionHeading marginBottom='120'>
      Lorem Ipsum dolor <h2>Web Apps</h2>
    </SectionHeading>
    <Carousel scenes={scenes} />
  </AppsSection>
)

const AppsSection = styled.section`
  background: var(--colorLightGray);
  padding: 0 0 60px;
`

export default Apps
