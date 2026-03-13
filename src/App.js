import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import Highlights from "./Highlights.jsx";
import { motion, useScroll, useSpring } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg} !important;
    color: ${({ theme }) => theme.text_primary} !important;
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6, p, span, a, div {
    color: inherit;
  }

  /* Override Materialize CSS defaults that might break dark mode */
  .carousel {
    background-color: transparent !important;
  }
  
  .carousel-item {
    color: inherit !important;
  }

  /* Dynamic Scrollbar Styling */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primary}cc;
  }
`;

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text_primary};
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0px;
    padding: 0;
  }
`

const ScrollProgress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: ${({ theme }) => theme.primary};
  transform-origin: 0%;
  z-index: 1100;
`

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optional: Auto-detect system preference
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router >
        <ScrollProgress style={{ scaleX }} />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <HeroSection />
          <div style={{ padding: '0px 0 10px 0' }}>
            <Highlights />
          </div>
          <MainContent>
            <Wrapper>
              <Skills />
            </Wrapper>
            <Wrapper>
              <Experience />
            </Wrapper>
            <Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </Wrapper>
            <Wrapper>
              <Education />
            </Wrapper>
            <Wrapper>
              <Contact />
            </Wrapper>
          </MainContent>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
