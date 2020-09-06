import styled from '@emotion/styled'
import { Link } from 'next/link'

const Nav = () => (
  <Navigation>
    <NavItems>
      <NavItem>
        <NavLink href='#about'>about</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#projects'>Apps</NavLink>
      </NavItem>
      <NavItem>
        <Logo>Joey Dye</Logo>
      </NavItem>
      <NavItem>
        <NavLink href='#websites'>Websites</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#contact'>Contact</NavLink>
      </NavItem>
    </NavItems>
  </Navigation>
)

const Navigation = styled.nav`
  max-width: 750px;
  margin: 0 auto;
`

const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
`

const NavItem = styled.li`
  text-transform: uppercase;
  font-weight: 700;
`

const NavLink = styled.a`
  text-decoration: none;
  color: white;
`

const Logo = styled.p`
  font-size: 24px;
  color: white;
`

export default Nav
