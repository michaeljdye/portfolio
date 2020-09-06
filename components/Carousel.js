import styled from '@emotion/styled'

const Carousel = () => {
  const scenes = [
    {
      id: 1,
      title: 'My Reads',
      description:
        'The MyReads app provides a simple way to find new books and track your latest reads. Features include search books, add to bookshelf, track reads, and bulk move.',
      stack: ['React', 'React Router', 'JS', 'CSS'],
    },
    {
      id: 2,
      title: 'Explore the Nations',
      description:
        'Explore The Nations features some of the top restaurants in The Nations. The app works with the Yelp and Google maps APIs to retrieve dynamic data about each location. In addition, Styled Components are used for applying custom styles.',
      stack: ['React', 'Google Maps API', 'Yelp API', 'Styled Components'],
    },
    {
      id: 3,
      title: 'Space Explorer',
      description:
        'Explore stars, planets and other astronomical objects from the NASA database.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    },
  ]

  return (
    <Slider>
      <SiderItems>
        <LeftArrow onClick={handlePrevSlide} />
        <Slide />
        <RightArrow onClick={handleNextSlide} />
      </SiderItems>
    </Slider>
  )
}

const Slider = styled.div``

const SliderItems = styled.div``

const Slide = styled.div``

const LeftArrow = styled.div``

const RightArrow = styled.div``

export default Carousel
