import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { Link } from 'next/link'
import { Menu } from '../svgs'
import { below } from '../../utils'

const links = [
  { title: 'About', href: '#about' },
  { title: 'Apps', href: '#about' },
  { title: 'Websites', href: '#websites' },
  { title: 'Contact', href: '#contact' },
]

const variants = {
  open: { x: 0 },
  closed: {
    x: '-100%',
    transition: {
      delay: 0.2,
    },
  },
}

const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: -1, // 1 forward, -1 backward,
      when: 'afterChildren',
    },
  },
}

const liVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: { opacity: 0 },
}

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Navigation>
      <NavItems>
        <NavItem>
          <NavLink href='#about'>About</NavLink>
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

      <MenuBtn onClick={() => setIsNavOpen(true)} />

      <MobileNav
        variants={variants}
        initial='closed'
        animate={isNavOpen ? 'open' : 'closed'}
        transition={{ damping: 300 }}
      >
        <button onClick={() => setIsNavOpen(false)}>X</button>
        <motion.ul variants={ulVariants}>
          {links.map(({ title, href }) => (
            <motion.li variants={liVariants}>
              <a href={href}>{title}</a>
            </motion.li>
          ))}
        </motion.ul>
      </MobileNav>
    </Navigation>
  )
}

const Navigation = styled.nav`
  position: relative;
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

const MobileNav = styled(motion.nav)`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  padding: 40px;

  ul,
  ll {
    margin: 0;
    padding: 0;
  }

  a {
    border-bottom: 2px transparent solid;
    color: white;
    font-size: 2rem;
    text-decoration: none;
    transition: border 0.3s ease;

    &:hover {
      border-bottom: 2px blue solid;
    }
  }

  button {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
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
  width: 260px;
`

const MenuBtn = styled(Menu)`
  display: none;

  ${below.phone`
      display: block;
      position: absolute;
      top: 40px;
      right: 10px;
    `}
`

export default Nav
