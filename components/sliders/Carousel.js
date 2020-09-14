import { useState } from 'react'
import styled from '@emotion/styled'
import scenes from '../../data/scenes.json'

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
        <LeftArrow onClick={handlePrevScene}>Left</LeftArrow>
        <ul>
          {scenes
            .filter((scene, index) => index === activeScene)
            .map(({ id, title, description, stack, demo, source }) => (
              <Slide key={id}>
                <h1>{title}</h1>
                <p>{description}</p>
                <Stack>
                  {stack.map(stackItem => (
                    <li key={stackItem}>{stackItem}</li>
                  ))}
                </Stack>
                <a href={demo}>View Demo</a>
                <a href={source}>View Source</a>
              </Slide>
            ))}
        </ul>

        <RightArrow onClick={handleNextScene}>Right</RightArrow>
      </SliderItems>
    </Slider>
  )
}

const Slider = styled.div``

const SliderItems = styled.div``

const Slide = styled.div``

const LeftArrow = styled.button``

const RightArrow = styled.button``

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
