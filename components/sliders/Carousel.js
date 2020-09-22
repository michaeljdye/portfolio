import { useState } from 'react'
import styled from '@emotion/styled'
import scenes from '../../data/scenes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = () => {
  const [activeScene, setActiveScene] = useState(0)

  const handlePrevScene = () => {
    if (activeScene <= 0) {
      setActiveScene(scenes.length - 1)
    } else {
      setActiveScene(prevScene => prevScene - 1)
    }
  }

  const handleNextScene = () => {
    if (activeScene >= scenes.length - 1) {
      setActiveScene(0)
    } else {
      setActiveScene(prevScene => prevScene + 1)
    }
  }

  return (
    <Slider>
      <SliderItems>
        <LeftArrow onClick={handlePrevScene}>
          <FontAwesomeIcon
            icon='chevron-left'
            size='2x'
            className='left-arrow'
          />
        </LeftArrow>
        <Slides>
          {scenes
            .filter((scene, index) => index === activeScene)
            .map(({ id, title, description, stack, demo, source }) => (
              <Slide key={id}>
                <SlideContent>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Stack>
                    {stack.map(stackItem => (
                      <li key={stackItem}>{stackItem}</li>
                    ))}
                  </Stack>
                  <a href={demo}>View Demo</a>
                  <a href={source}>View Source</a>
                </SlideContent>
                <SlideImg
                  src='/images/joey-dye-fullstack-developer.jpg'
                  alt='Joey Dye'
                />
              </Slide>
            ))}
        </Slides>

        <RightArrow onClick={handleNextScene}>
          <FontAwesomeIcon
            icon='chevron-right'
            size='2x'
            className='right-arrow'
          />
        </RightArrow>
      </SliderItems>
    </Slider>
  )
}

const Slider = styled.div``

const SliderItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--colorLightGray);
  padding: 20px 0;
`

const Slides = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const Slide = styled.div``

const SlideContent = styled.div`
  width: 350px;
  max-width: 90%;
  margin-right: 600px;
`

const SlideImg = styled.img`
  position: absolute;
  right: 300px;
  top: -60px;
`

const arrow = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  .right-arrow,
  .left-arrow {
    color: var(--colorPrimary);
  }
`

const LeftArrow = styled(arrow)``

const RightArrow = styled(arrow)``

const Stack = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 700;

  li + li {
    border-left: 1px solid black;
    margin-left: 10px;
    padding-left: 10px;
  }
`

export default Carousel
