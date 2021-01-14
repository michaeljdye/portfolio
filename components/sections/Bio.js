import styled from '@emotion/styled'
import { SectionHeading } from '../headings'
import { above } from '../../utils'

const Bio = () => (
  <BioSection id='about'>
    <BioInner>
      <BioImg
        src='/images/michael-dye-fullstack-developer.jpg'
        alt='MIchael Dye'
      />
      <BioContent>
        <SectionHeading align='right' isImage={true}>
          <img src='/images/squiggly-line.png' alt='Squiggly line' />
          hello, my name is <h2>MIchael Dye</h2>
        </SectionHeading>
        <p>
          I use modern web technologies to build excellent user interfaces.
          While I specialize in the frontend, I also have strong knowledge of
          the backend, having built apps using Node.js, Express and MongoDB.
        </p>
        <p>
          I enjoy learning new technologies and am continuously focused on
          adding new libraries, frameworks, languages, and design patterns to my
          toolbox. I also have plenty of experience building marketing sites for
          clients on popular CMSs, such as WordPress and Drupal.
        </p>
      </BioContent>
    </BioInner>
  </BioSection>
)

const BioSection = styled.section`
  background: var(--bioBackground);
  padding: var(--defaultPadding) 0 0 0;
  color: var(--bioColor);
`

const BioInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  ${above.desktop`
    flex-direction: row;
    align-items: stretch;
  `}
`

const BioImg = styled.img`
  width: 450px;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 3.75rem;

  ${above.desktop`
    margin-bottom: 0;
  `}
`

const BioContent = styled.div`
  width: 420px;
  max-width: 100%;

  ${above.desktop`
      margin-left: auto;
  `}

  p {
    margin-bottom: 0;
    text-align: left;
  }

  span {
    display: block;
  }
`

export default Bio
