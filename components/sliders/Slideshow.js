import { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { below } from '../../utils'

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
    <div style={{ marginBottom: 500 }}>
      <div style={{ position: 'relative' }}>
        <LeftArrow onClick={() => paginate(1)}>
          <FontAwesomeIcon
            icon='chevron-left'
            size='2x'
            className='left-arrow'
          />
        </LeftArrow>
        <AnimatePresence custom={direction}>
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
              position: 'absolute',
              height: 300,
              width: '100%',
            }}
          >
            <SlideContent>
              <div>
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
            </SlideContent>
          </motion.div>
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

const SlideContent = styled.div`
  position: relative;

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

export default Slideshow
