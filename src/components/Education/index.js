
import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  align-items: center;
  padding: 24px 0px 32px 0px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  margin: 12px;
  @media (max-width: 960px) {
    padding: 20px 0px 28px 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 24px 0px 32px 0;
  gap: 16px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 20px 0px 28px 0;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 16px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
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