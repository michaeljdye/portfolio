import { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { below } from '../../utils'
import { ButtonPrimary } from '../buttons'

const Slideshow = ({ scenes }) => {
  const [[scene, direction], setScene] = useState([0, 0])
  const paginate = direction => {
    setScene([scene + direction, direction])
  }

  const variants = {
    enter: direction => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: direction => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const index = wrap(0, scenes.length, scene)

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <LeftArrow onClick={() => paginate(1)}>
          <FontAwesomeIcon
            icon='chevron-left'
            size='2x'
            className='left-arrow'
          />
        </LeftArrow>
        <AnimatePresence custom={direction}>
          <SlideContent>
            <motion.div
              key={scene}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic='1'
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 400) {
                  paginate(-1)
                } else if (offset.x < -400) {
                  paginate(1)
                }
              }}
              transition={{
                x: { type: 'spring', stiffness: 100, bounce: 0, damping: 20 },
                opacity: { duration: 0.2 },
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                height: 300,
                width: '100%',
              }}
            >
              <div className='slide-text'>
                <h3>{scenes[index].title}</h3>
                <p>{scenes[index].description}</p>
                <Stack>
                  {scenes[index].stack.map(stackItem => (
                    <li key={stackItem}>{stackItem}</li>
                  ))}
                </Stack>
              </div>
              <SlideImg
                src='https://placeimg.com/500/500/tech'
                alt='Joey Dye'
              />
              <ButtonContainer>
                <ButtonPrimary dark>View Source</ButtonPrimary>
                <ButtonPrimary dark>View Demo</ButtonPrimary>
              </ButtonContainer>
            </motion.div>
          </SlideContent>
        </AnimatePresence>

        <RightArrow onClick={() => paginate(-1)}>
          <FontAwesomeIcon
            icon='chevron-right'
            size='2x'
            className='right-arrow'
          />
        </RightArrow>
      </div>
    </div>
  )
}

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: var(--colorMediumGray);
  height: 300px;
  padding: 40px 0;

  ${below.phone`
    display: flex;
    justify-content: center;
  `}

  .slide-text {
    display: inline-block;
    width: 400px;
    max-width: 90%;
    margin-left: 150px;

    ${below.phone`
      margin-left: 0;
    `}
  }
`

const SlideImg = styled.img`
  position: absolute;
  top: -100px;
  right: 150px;
  display: inline-block;
  width: 500px;
  margin: 0 auto;

  ${below.phone`
    display: none; 
  `}
`

const Stack = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.875rem;
    text-align: center;
  }

  li + li {
    border-left: 1px solid black;
    margin-left: 10px;
    padding-left: 10px;
  }
`

const arrow = styled.button`
  position: absolute;
  top: 175px;
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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -100px;
  left: 150px;

  button + button {
    margin-left: 20px;
  }
`

export default Slideshow
