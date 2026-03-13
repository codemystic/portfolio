import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { motion } from 'framer-motion'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  align-items: center;
  padding: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;
  gap: 24px;
  
  @media (max-width: 960px) {
    padding: 10px 0;
  }
`;

const Title = styled.h2`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 42px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.04em;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  max-width: 650px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsGrid = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 16px;
  }
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Title>Education</Title>
            <Desc>
                The foundation of my knowledge and expertise, built through rigorous academic pursuits and continuous learning.
                Each degree represents a milestone in my journey toward excellence in technology and innovation.
            </Desc>
        </motion.div>
        <SkillsGrid>
          {education.map((edu, index) => (
            <motion.div
                key={edu.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <EducationCard education={edu} index={index} />
            </motion.div>
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
};

export default Education;