import styled from '@emotion/styled'
import { Link } from 'next/link'
import { below } from '../../utils'

const Nav = () => (
  <Navigation>
    <NavItems>
      <NavItem>
        <NavLink href='#about'>about</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#projects'>Apps</NavLink>
      </NavItem>
      <NavItem className='logo'>
        <Logo src='/images/joey-dye-logo.png' alt='Joey Dye' />
      </NavItem>
      <NavItem>
        <NavLink href='#websites'>Websites</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#contact'>Contact</NavLink>
      </NavItem>
    </NavItems>

    <MobileNavItems>
      <NavItem>
        <NavLink href='#about'>about</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#projects'>Apps</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#websites'>Websites</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#contact'>Contact</NavLink>
      </NavItem>
    </MobileNavItems>
  </Navigation>
)

const Navigation = styled.nav`
  width: 1200px;
  max-width: 90%;
  margin: 0 auto;
`

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MobileNavItems = styled.div`
  display: none;
`

const NavItem = styled.li`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 2.3px;

  ${below.phone`
    &:not(.logo) {
      display: none;
    }
  `}

  & + li {
    margin-left: 60px;

    ${below.phone`
      margin-left: 0;
    `}
`

const NavLink = styled.a`
  text-decoration: none;
  color: white;
`

const Logo = styled.img`
  width: 275px;
`

export default Nav
