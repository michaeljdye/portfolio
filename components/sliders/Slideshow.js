import { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { below, above } from '../../utils'
import { ButtonPrimary } from '../buttons'

const Slideshow = ({ scenes }) => {
  const [[scene, direction], setScene] = useState([0, 0])
  const paginate = direction => {
    setScene([scene + direction, direction])
  }

  const variants = {
    enter: direction => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: direction => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
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
            <SlideInner
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
              <SlideImgContainer>
                <SlideImg
                  src={scenes[index].image}
                  alt='Michael Dye'
                  width={scenes[index].width}
                  priority={true}
                />
              </SlideImgContainer>
              <ButtonContainer>
                {scenes[index].source && (
                  <ButtonPrimary dark as='a' href={scenes[index].source}>
                    View Source
                  </ButtonPrimary>
                )}
                {scenes[index].demo && (
                  <ButtonPrimary
                    dark
                    as='a'
                    target='_blank'
                    rel='nofollow noopenner'
                    href={scenes[index].demo}
                  >
                    View App
                  </ButtonPrimary>
                )}
              </ButtonContainer>
            </SlideInner>
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
  justify-content: center;
  align-items: center;
  background: var(--colorMediumGray);
  height: auto;
  padding: 2.5rem 0;
  overflow: hidden;

  ${above.phone`
    justify-content: flex-start;
    overflow: visible;
    height: 21.875rem;
  `}

  h3 {
    margin-top: 0;
  }

  .slide-text {
    display: inline-block;
    width: 90%;
    max-width: 300px;
    margin: 0 auto;
    text-align: center;

    ${above.phone`
      margin-left: 9.375rem;
      text-align: left;
    `}
  }
`

const SlideInner = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  height: 350px;

  ${above.phone`
     flex-direction: row;
  `}
`

const SlideImg = styled.img`
  display: inline-block;
  max-width: 100%;
`

const SlideImgContainer = styled.div`
  position: static;
  margin: 0 auto 0.625rem;
  transform: translateY(0);

  ${above.phone`
      position: absolute;
      left: 40%;
      top: 50%;
      transform: translateY(-50%);
  `}
`

const Stack = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin: 0;

  ${above.phone`
    justify-content: start;
  `}

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

const arrow = styled.button`
  display: none;
  position: absolute;
  top: 10.9375rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--colorPrimary);
  z-index: 100;

  ${above.phone`
    display: block;
  `}
`

const LeftArrow = styled(arrow)`
  left: 3.125rem;
`

const RightArrow = styled(arrow)`
  right: 3.125rem;
`

const ButtonContainer = styled.div`
  position: absolute;
  left: 9.375rem;
  bottom: -20%;

  a + a {
    margin-left: 1.25rem;
  }
`

export default Slideshow
