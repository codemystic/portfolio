import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileMenuLink, MobileMenuButton } from './NavbarStyledComponent'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Span>Coder</Span>Mystic
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>

        <MobileMenu isOpen={isOpen}>
          <MobileMenuLink href="#about" onClick={() => setIsOpen(!isOpen)}>
            About
          </MobileMenuLink>
          <MobileMenuLink href='#skills' onClick={() => setIsOpen(!isOpen)}>
            Skills
          </MobileMenuLink>
          <MobileMenuLink href='#experience' onClick={() => setIsOpen(!isOpen)}>
            Experience
          </MobileMenuLink>
          <MobileMenuLink href='#projects' onClick={() => setIsOpen(!isOpen)}>
            Projects
          </MobileMenuLink>
          <MobileMenuLink href='#education' onClick={() => setIsOpen(!isOpen)}>
            Education
          </MobileMenuLink>
          <MobileMenuButton href={Bio.github} target="_blank">
            Github Profile
          </MobileMenuButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar