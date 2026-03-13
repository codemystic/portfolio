import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
// import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import Highlights from "./Highlights.jsx";
import Testimonial from "./components/Testimonials/Testimonial.js";

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  gap: 60px;
  padding: 80px 0;

  @media (max-width: 768px) {
    gap: 40px;
    padding: 60px 0;
  }
`

function App() {
  const [darkMode, setDarkMode] = useState(false); // Force light mode to match referenced site
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Highlights />
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
