import styled from '@emotion/styled'

const Sites = () => (
  <SitesSection>
    <h2>Marketing Sites</h2>
    <SitesList>
      <Site>
        <img src='#' alt='' />
        <button>+</button>
        <SiteDescription>
          <h3>Nissan Stadium</h3>
          <button>Learn More</button>
        </SiteDescription>
      </Site>
      <Site>
        <img src='#' alt='' />
        <button>+</button>
        <SiteDescription>
          <h3>Roger's Group</h3>
          <button>Learn More</button>
        </SiteDescription>
      </Site>
      <Site>
        <img src='#' alt='' />
        <button>+</button>
        <SiteDescription>
          <h3>Outback Concerts</h3>
          <button>Learn More</button>
        </SiteDescription>
      </Site>
    </SitesList>
  </SitesSection>
)

const SitesSection = styled.section`
  padding: 80px 0;
`

const SitesList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Site = styled.div`
  border: 1px solid black;
  padding: 50px;
`

const SiteDescription = styled.div``

export default Sites
