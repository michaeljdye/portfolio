import styled from '@emotion/styled'
import scenes from '../../data/scenes.json'
import { SectionHeading } from '../headings'
import Slideshow from '../sliders/Slideshow'
import { OneByTwo } from '../grids'
import { above } from '../../utils'

const Apps = () => (
  <AppsSection id='apps'>
    <SectionHeading marginBottom='120'>
      engage your users <h2>Web Apps</h2>
    </SectionHeading>
    {scenes.map((scene, i) => {
      const isReverse = i % 2 === 0 ? true : false

      return (
        <OneByTwo reverse={isReverse}>
          <SlideText reverse={isReverse}>
            <h3>{scene.title}</h3>
            <p>{scene.description}</p>
            <Stack>
              {scene.stack.map(stackItem => (
                <li key={stackItem}>{stackItem}</li>
              ))}
            </Stack>
          </SlideText>
          <SlideImgContainer>
            <img src={scene.image} alt='' />
          </SlideImgContainer>
        </OneByTwo>
      )
    })}
    {/* <Slideshow scenes={scenes} /> */}
  </AppsSection>
)

const AppsSection = styled.section`
  background: var(--appsBackground);
  padding: var(--defaultPadding) 0 var(--defaultPadding);
  margin-bottom: 20px;
  color: var(--appsColor);

  ${above.tablet`
      margin-bottom: 0;
    `}
`

const SlideText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ reverse }) =>
    reverse ? 'var(--colorGray)' : 'var(--colorMediumGray)'};
  width: 50%;
  color: ${({ reverse }) =>
    reverse ? 'var(--colorWhite)' : 'var(--colorDark)'};

  p {
    width: 90%;
    max-width: 500px;
    text-align: center;
  }
`

const SlideImgContainer = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
`

const Stack = styled.div`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.125rem;
    text-align: center;
  }

  li + li {
    border-left: 1px solid black;
    margin-left: 0.625rem;
    padding-left: 0.625rem;
  }
`

export default Apps
