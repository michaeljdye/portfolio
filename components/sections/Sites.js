import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { SectionHeading } from '../headings'
import { ButtonPrimary } from '../buttons'
import { below } from '../../utils'

const Sites = () => (
  <SitesSection>
    <SectionHeading>
      Grow your business <h2>Marketing Sites</h2>
    </SectionHeading>
    <SitesList>
      <Site>
        <img src='https://placeimg.com/500/500/tech' alt='Placeholder' />
        <SiteDescription>
          <button>
            <FontAwesomeIcon icon={faPlus} size='2x' />
          </button>
          <h3>Nissan Stadium</h3>
          <p>This is a description about the site.</p>
          <ButtonPrimary>Learn More</ButtonPrimary>
        </SiteDescription>
      </Site>
      <Site>
        <img src='https://placeimg.com/500/500/tech' alt='Placeholder' />
        <SiteDescription>
          <button>
            <FontAwesomeIcon icon={faPlus} size='2x' />
          </button>
          <h3>Roger's Group</h3>
          <p>This is a description about the site.</p>
          <ButtonPrimary>Learn More</ButtonPrimary>
        </SiteDescription>
      </Site>
      <Site>
        <img src='https://placeimg.com/500/500/tech' alt='Placeholder' />
        <SiteDescription>
          <button>
            <FontAwesomeIcon icon={faPlus} size='2x' />
          </button>
          <h3>Outback Concerts</h3>
          <p>This is a description about the site.</p>
          <ButtonPrimary>Learn More</ButtonPrimary>
        </SiteDescription>
      </Site>
    </SitesList>
  </SitesSection>
)

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

  ${below.phone`
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

  ${below.phone`
    --gap: 0;
  `}

  & + li {
    margin-left: var(--gap);
  }

  img {
    height: 100%;
    width: 100%;
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
  transform: translate3d(0, 100px, 0);
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

  button:first-of-type {
    position: absolute;
    top: -26px;
    background: var(--colorPrimary);
    border-radius: 50%;
    border: none;
    padding: 10px;
    color: var(--colorWhite);
  }
`

export default Sites
