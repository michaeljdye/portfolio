import styled from '@emotion/styled'
import { SectionHeading } from '../headings'
import { below } from '../../utils'

const Bio = () => (
  <BioSection>
    <BioImg src='/images/joey-dye-fullstack-developer.jpg' alt='Joey Dye' />
    <BioContent>
      <SectionHeading align='right' isImage={true}>
        <img src='/images/squiggly-line.png' alt='Squiggly line' />
        Hello, my name is <h2>Joey Dye</h2>
      </SectionHeading>
      <p>
        I use modern web technologies to build excellent user interfaces. While
        I specialize in the frontend, I also have strong knowledge of the
        backend, having built apps using Node.js, Express and MongoDB.
      </p>
      <p>
        I enjoy learning new technologies and am continuously focused on adding
        new libraries, frameworks, languages, and design patterns to my toolbox.
        I also have plenty of experience building marketing sites for clients on
        popular CMSs, such as WordPress and Drupal.
      </p>
    </BioContent>
  </BioSection>
)

const BioSection = styled.section`
  display: flex;
  width: 1000px;
  max-width: 90%;
  padding: 80px 0;
  margin: 0 auto;

  ${below.phone`
    flex-direction: column;
  `}
`

const BioImg = styled.img`
  width: 450px;
  max-width: 100%;
  object-fit: cover;
`

const BioContent = styled.div`
  width: 500px;
  max-width: 100%;
  margin-left: 60px;

  ${below.phone`
    margin-left: 0;
  `}

  span {
    display: block;
  }
`

export default Bio
