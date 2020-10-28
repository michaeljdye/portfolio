import styled from '@emotion/styled'
import Nav from './Nav'

const Header = () => (
  <HeaderSection>
    <Nav />
  </HeaderSection>
)

const HeaderSection = styled.section`
  width: 100%;
`

export default Header
