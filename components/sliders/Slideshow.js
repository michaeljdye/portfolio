import { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { below } from '../../utils'
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
                      priority={true}
                    >
                      View App
                    </ButtonPrimary>
                  )}
                </ButtonContainer>
              </div>
              <SlideImgContainer>
                <SlideImg
                  src={scenes[index].image}
                  alt='Michael Dye'
                  layout='fill'
                  priority={true}
                />
              </SlideImgContainer>
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
  align-items: center;
  background: var(--colorMediumGray);
  height: 350px;
  padding: 40px 0;

  ${below.phone`
    display: flex;
    justify-content: center;
    overflow: hidden;
  `}

  h3 {
    margin-top: 0;
  }

  p {
    ${below.phone`
      display: none;
    `}
  }

  .slide-text {
    display: inline-block;
    width: 90%;
    max-width: 300px;
    margin-left: 150px;

    ${below.phone`
      margin: 0 auto;
      text-align: center;
    `}
  }
`

const SlideInner = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 320px;
  width: 100%;

  ${below.phone`
     flex-direction: column-reverse;
  `}
`

const SlideImg = styled(Image)`
  display: inline-block;
  object-fit: contain;
`

const SlideImgContainer = styled.div`
  width: 900px;
  max-width: 100%;
  height: 650px;
  margin: 0 auto 675px;
  transform: translateY(50%);

  ${below.phone`
      margin: 0 auto 10px;
      transform: translateY(0);
  `}
`

const Stack = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;

  ${below.phone`
    justify-content: center;
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

  ${below.phone`
    display: none;
  `}
`

const LeftArrow = styled(arrow)`
  left: 50px;
`

const RightArrow = styled(arrow)`
  right: 50px;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -20%;

  a + a {
    margin-left: 20px;
  }
`

export default Slideshow
