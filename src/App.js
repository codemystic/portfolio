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
  background: #fafafa;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  margin: 12px 20px;
  width: calc(100% - 40px);
  padding: 24px 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }
`

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 2;
  padding-top: 12px;
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
