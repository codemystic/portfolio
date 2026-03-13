import React from 'react'
import { skills } from '../../data/constants'
import { Container, Wrapper, Title, Desc, SkillsGrid, SkillCard, SkillName, SkillTag, TechLogo, TechName } from '../About/AboutStyle'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Title>Skills</Title>
            <Desc>
            A comprehensive collection of technical skills and tools that I've mastered through hands-on projects and continuous learning. From programming languages to cutting-edge frameworks, each skill represents my commitment to delivering innovative solutions.
            </Desc>
        </motion.div>
        <SkillsGrid>
          {skills.map((skillCategory, index) => (
            <motion.div
                key={skillCategory.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <SkillCard>
                <SkillName>{skillCategory.title}</SkillName>
                <SkillTag>
                    {skillCategory.skills.map((skill) => (
                    <TechLogo key={skill.name}>
                        <img src={skill.image} alt={skill.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                        <TechName>{skill.name}</TechName>
                    </TechLogo>
                    ))}
                </SkillTag>
                </SkillCard>
            </motion.div>
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  )
}

export default Skills