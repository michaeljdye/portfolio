import styled from '@emotion/styled'
import Carousel from '../sliders/Carousel'
import { SectionHeading } from '../headings'

const Apps = () => (
  <AppsSection>
    <SectionHeading marginBottom='120'>
      Lorem Ipsum dolor <h2>Web Apps</h2>
    </SectionHeading>
    <Carousel />
  </AppsSection>
)

const AppsSection = styled.section`
  padding: 0 0 60px;
`

export default Apps
