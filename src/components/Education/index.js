
import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

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
  padding: 40px 0;
  gap: 32px;
  
  @media (max-width: 960px) {
    padding: 32px 0;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 19px;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 17px;
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
        <Title>Educational Journey</Title>
        <Desc>
          The foundation of my knowledge and expertise, built through rigorous academic pursuits and continuous learning.
          Each degree represents a milestone in my journey toward excellence in technology and innovation.
        </Desc>
        <SkillsGrid>
          {education.map((edu, index) => (
            <EducationCard key={edu.id || index} education={edu} index={index} />
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
};

export default Education;