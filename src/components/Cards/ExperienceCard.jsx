import React from 'react'
import styled from 'styled-components'

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
    font-weight: 400;
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
    
    &:hover{
        box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
        border-color: ${({ theme }) => theme.primary}40;
    }
    
    @media only screen and (max-width: 768px){
        padding: 20px;
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
    height: 50px;
    width: 50px;
    background-color: #000;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    
    @media only screen and (max-width: 768px){
        height: 40px;
        width: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Role = styled.h4`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Outfit', sans-serif;
    
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Company = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`

const DateStr = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.7;
    
    @media only screen and (max-width: 768px){
        font-size: 11px;
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
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    background: ${({ theme }) => theme.card_light};
    padding: 2px 10px;
    border-radius: 50px;
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
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
                                <Skill key={index}>• {skill}</Skill>
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