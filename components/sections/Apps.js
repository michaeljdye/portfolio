import styled from '@emotion/styled'
import scenes from '../../data/scenes.json'
import { SectionHeading } from '../headings'
import Slideshow from '../sliders/Slideshow'
import { OneByTwo } from '../grids'
import { ButtonPrimary } from '../buttons'
import { above } from '../../utils'

const Apps = () => (
  <AppsSection id='apps'>
    <SectionHeading marginBottom='80'>
      engage your users <h2>Web Apps</h2>
    </SectionHeading>
    {scenes.map((scene, i) => {
      const isReverse = i % 2 === 0 ? true : false

      return (
        <OneByTwo key={scene.title} reverse={isReverse}>
          <SlideText reverse={isReverse}>
            <h3>{scene.title}</h3>
            <p>{scene.description}</p>
            <Stack reverse={isReverse}>
              {scene.stack.map(stackItem => (
                <li key={stackItem}>{stackItem}</li>
              ))}
            </Stack>
            <ButtonContainer>
              {scene.source && (
                <ButtonPrimary
                  dark
                  as='a'
                  target='_blank'
                  rel='nofollow noopenner'
                  href={scene.source}
                >
                  View Source
                </ButtonPrimary>
              )}
              {scene.demo && (
                <ButtonPrimary
                  dark
                  as='a'
                  target='_blank'
                  rel='nofollow noopenner'
                  href={scene.demo}
                >
                  View App
                </ButtonPrimary>
              )}
            </ButtonContainer>
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
  padding: var(--defaultPadding) 0 0 0;
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
  background: var(--appSlideTextBackground);
  width: 100%;
  height: 400px;
  color: var(--appSlideText);

  ${above.phone`
    width: 50%;
    height: auto;
  `}

  p {
    width: 90%;
    max-width: 500px;
    text-align: center;
  }
`

const SlideImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;
  text-align: center;

  ${above.phone`
    display: block;
    width: 50%;
    height: auto
  `}

  img {
    max-width: 100%;
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
    border-left: 1px solid
      ${({ reverse }) =>
        reverse ? 'var(--colorWhite)' : 'var(--appStackText)'};
    margin-left: 0.625rem;
    padding-left: 0.625rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  a + a {
    margin-left: 1.25rem;
  }
`

export default Apps
