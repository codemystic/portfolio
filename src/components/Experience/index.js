import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { motion } from 'framer-motion';

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
    gap: 20px;
    
    @media (max-width: 960px) {
        padding: 10px 0;
    }
`;

export const Title = styled.h2`
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

export const Desc = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  max-width: 650px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 24px;
    flex-wrap: wrap;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <Title>Experience</Title>
                    <Desc>
                        A journey of growth and innovation across diverse roles and organizations. Each experience has shaped my expertise and passion for creating impactful solutions in the ever-evolving tech landscape.
                    </Desc>
                </motion.div>
                <CardsContainer>
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ExperienceCard experience={experience} />
                        </motion.div>
                    ))}
                </CardsContainer>
            </Wrapper>
        </Container>
    )
}

export default Experience