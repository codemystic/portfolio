import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import { Container, Wrapper, Title, Desc, SkillsGrid, SkillCard, SkillName, SkillTag, TechLogo, TechName } from '../About/AboutStyle'

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          A comprehensive collection of technical skills and tools that I've mastered through hands-on projects and continuous learning. From programming languages to cutting-edge frameworks, each skill represents my commitment to delivering innovative solutions.
        </Desc>
        <SkillsGrid>
          {skills.map((skillCategory) => (
            <SkillCard key={skillCategory.title}>
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
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  )
}

export default Skills