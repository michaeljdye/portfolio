import { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { SectionHeading } from '../headings'
import { ButtonPrimary } from '../buttons'
import { below } from '../../utils'
import sites from '../../data/sites.json'

const Sites = () => {
  const [mktSites, setMktSites] = useState(sites)

  const handleUpdateIcon = currentId => {
    setMktSites(prevSites =>
      prevSites.map(({ open, id, ...rest }) =>
        id === currentId ? { ...rest, id, open: !open } : { ...rest, id, open }
      )
    )
  }

  return (
    <SitesSection id='sites'>
      <SectionHeading>
        grow your business <h2>Marketing Sites</h2>
      </SectionHeading>
      <SitesList>
        {mktSites.map(({ id, title, description, link, open }) => (
          <Site key={id}>
            <img src='https://placeimg.com/500/500/tech' alt='Placeholder' />
            <SiteDescription
              onMouseEnter={() => handleUpdateIcon(id)}
              onMouseLeave={() => handleUpdateIcon(id)}
            >
              <Circle>
                <FontAwesomeIcon icon={open ? faMinus : faPlus} size='2x' />
              </Circle>
              <h3>{title}</h3>
              <p>{description}</p>
              <ButtonPrimary as='a' href={link}>
                Learn More
              </ButtonPrimary>
            </SiteDescription>
          </Site>
        ))}
      </SitesList>
    </SitesSection>
  )
}

const SitesSection = styled.section`
  background: var(--colorLightGray);
  padding: 80px 0 0;
`

const SitesList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  ${below.tablet`
    flex-direction: column;
  `}
`

const Site = styled.li`
  --gap: 15px;
  position: relative;
  height: 450px;
  width: calc(100% - var(--gap))
  border: 1px solid black;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  ${below.tablet`
    --gap: 0;
  `}

  & + li {
    margin-left: var(--gap);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SiteDescription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px;
  transform: translate3d(0, 110px, 0);
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }

  h3,
  p {
    color: var(--colorWhite);
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    font-size: 1.2rem;
  }
`

const Circle = styled.div`
  position: absolute;
  top: -26px;
  background: var(--colorPrimary);
  border-radius: 50%;
  border: none;
  padding: 10px;
  color: var(--colorWhite);
`

export default Sites
