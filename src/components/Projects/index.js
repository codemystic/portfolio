import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { motion } from 'framer-motion'

const Projects = ({openModal,setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Title>Projects</Title>
            <Desc>
            Transforming ideas into reality through innovative solutions. From cutting-edge web applications to intelligent machine learning systems, each project represents a unique challenge and an opportunity to push the boundaries of what's possible.
            </Desc>
        </motion.div>
        <CardContainer>
          {projects.map((project, index) => (
            <motion.div
                key={project.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            </motion.div>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects