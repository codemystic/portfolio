import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  padding: 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(102, 126, 234, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 40px 40px 0;
    border-color: transparent rgba(102, 126, 234, 0.1) transparent transparent;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &:hover::after {
    border-width: 0 50px 50px 0;
    border-color: transparent rgba(102, 126, 234, 0.2) transparent transparent;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  
  @media only screen and (max-width: 768px) {
    gap: 16px;
  }
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  background-color: white;
  border-radius: 16px;
  margin-top: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  object-fit: cover;
  border: 2px solid rgba(102, 126, 234, 0.1);
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.3;
  
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Degree = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #667eea;
  line-height: 1.4;
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #64748b;
  background: rgba(102, 126, 234, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
  
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    padding: 4px 10px;
  }
`;

const Grade = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  padding: 12px 20px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #f59e0b;
  
  b {
    color: #92400e;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding: 10px 16px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #475569;
  line-height: 1.6;
  margin-top: 8px;
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
`;

const EducationCard = ({ education, index }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} alt={education.school} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
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