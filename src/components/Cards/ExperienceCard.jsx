import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
    
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`

const Span = styled.span`
    display: block;
    margin-bottom: 12px;
`

const Card = styled(motion.div)`
    flex: 1;
    min-width: 300px;
    max-width: 460px;
    border-radius: 16px;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease;
    background: ${({ theme }) => theme.bgLight};
    border: 1.5px solid ${({ theme }) => theme.primary}15;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
    
    &:hover{
        box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1);
        border-color: ${({ theme }) => theme.primary}80;
    }
    
    @media only screen and (max-width: 768px){
        padding: 20px;
        min-width: 280px;
    }

    &:hover ${Document}{
        display: flex;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
`

const Image = styled.img`
    height: 54px;
    width: 54px;
    background-color: #000;
    border-radius: 14px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    
    @media only screen and (max-width: 768px){
        height: 44px;
        width: 44px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Role = styled.h4`
    font-size: 20px;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Bricolage Grotesque', sans-serif;
    letter-spacing: -0.02em;
    
    @media only screen and (max-width: 768px){
        font-size: 17px;
    }
`

const Company = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_secondary};
    
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const DateStr = styled.div`
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.8;
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 4px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}10;
    padding: 2px 12px;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.primary}20;
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Top>
                <Image src={experience.img} alt={experience.company} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <DateStr>{experience.date}</DateStr>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience?.desc}</Span>}
                {experience?.skills && (
                    <Skills>
                        <ItemWrapper>
                            {experience?.skills?.map((skill, index) => (
                                <Skill key={index}>{skill}</Skill>
                            ))}
                        </ItemWrapper>
                    </Skills>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    )
}

export default ExperienceCard