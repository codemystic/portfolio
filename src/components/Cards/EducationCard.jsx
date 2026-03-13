import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Card = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease;
  background: ${({ theme }) => theme.bgLight};
  border: 1.5px solid ${({ theme }) => theme.primary}15;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  
  &:hover {
    box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary}80;
  }
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const Image = styled.img`
  height: 54px;
  width: 54px;
  background-color: white;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  @media only screen and (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.h4`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
  
  @media only screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

const Degree = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const DateStr = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.8;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.primary}10;
  padding: 6px 14px;
  border-radius: 12px;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.primary}20;
  
  b {
    color: ${({ theme }) => theme.primary};
  }
`;

const Description = styled.div`
  width: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Span = styled.span`
  display: block;
`;

const EducationCard = ({ education }) => {
  return (
    <Card
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Top>
        <Image src={education.img} alt={education.school} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <DateStr>{education.date}</DateStr>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>{education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;