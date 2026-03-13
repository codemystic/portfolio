import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileMenuLink, MobileMenuButton, ThemeToggle } from './NavbarStyledComponent'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/' as={motion.a}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
          <Span>Port</Span>folio
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item, index) => (
              <motion.div
                  key={item}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                  <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
              </motion.div>
          ))}
        </NavItems>

        <ButtonContainer>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
          >
            <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </motion.div>
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
          <MobileMenuButton href={Bio.github} target="_blank" style={{padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content'}}>
            Github Profile
          </MobileMenuButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar