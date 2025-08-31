import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Transforming ideas into reality through innovative solutions. From cutting-edge web applications to intelligent machine learning systems, each project represents a unique challenge and an opportunity to push the boundaries of what's possible.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects