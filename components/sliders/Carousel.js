import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonPrimary } from '../buttons'
import { below } from '../../utils'

const Carousel = ({ scenes }) => {
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
            .map(({ id, title, description, stack, demo, source, image }) => (
              <Slide key={id}>
                <SlideContent>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Stack>
                      {stack.map(stackItem => (
                        <li key={stackItem}>{stackItem}</li>
                      ))}
                    </Stack>
                  </div>
                  <SlideImg src={image} alt='Joey Dye' />
                </SlideContent>
                <SlideButtons>
                  <ButtonPrimary as='a' dark href={demo}>
                    View Demo
                  </ButtonPrimary>
                  <ButtonPrimary as='a' dark href={source}>
                    View Source
                  </ButtonPrimary>
                </SlideButtons>
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

const Slider = styled.div`
  position: relative;
`

const SliderItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%:
  padding: 20px 0;
`

const Slides = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`

const Slide = styled.div`
  transition: all 0.5s ease-out;
`

const SlideContent = styled.div`
  position: relative;
  background: var(--colorMediumGray);

  ${below.phone`
    display: flex;
    justify-content: center;
  `}

  div {
    display: inline-block;
    width: 400px;
    max-width: 90%;
    margin-left: 150px;
    padding: 40px 0;

    ${below.phone`
      margin-left: 0;
    `}
  }
`

const SlideImg = styled.img`
  position: absolute;
  top: -40px;
  right: 300px;
  display: inline-block;
  width: 500px;
  margin: 0 auto;

  ${below.phone`
    display: none; 
  `}
`

const arrow = styled.button`
  position: absolute;
  top: 125px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--colorPrimary);
  z-index: 100;
`

const LeftArrow = styled(arrow)`
  left: 50px;
`

const RightArrow = styled(arrow)`
  right: 50px;
`

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

const SlideButtons = styled.div`
  margin: 20px 0 0 150px;

  ${below.phone`
    margin-left: 0;
  `}

  a + a {
    margin-left: 10px;
  }
`

export default Carousel
