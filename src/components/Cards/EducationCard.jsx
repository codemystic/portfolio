import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 20px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary}30;
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
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Outfit', sans-serif;
  
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Degree = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const DateStr = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.7;
  
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.card_light};
  padding: 6px 12px;
  border-radius: 12px;
  width: fit-content;
  
  b {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Span = styled.span`
  display: block;
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
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