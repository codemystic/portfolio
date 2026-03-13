import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Card = styled(motion.div)`
    width: 320px;
    background-color: ${({ theme }) => theme.bgLight};
    cursor: pointer;
    border-radius: 16px;
    border: 1.5px solid ${({ theme }) => theme.primary}15;
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

    &:hover {
        box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1);
        border-color: ${({ theme }) => theme.primary}80;
    }
`

const Image = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.bg};
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;
    
    ${Card}:hover & {
        transform: scale(1.05);
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`

const Tag = styled.span`
    font-size: 11px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary}15;
    padding: 4px 12px;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Title = styled.h3`
    font-size: 22px;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Bricolage Grotesque', sans-serif;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    letter-spacing: -0.02em;
`

const DateStr = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.8;
`

const Description = styled.p`
    font-weight: 500;
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin-bottom: 0;
    line-height: 1.5;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 8px;
`

const Avatar = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border: 2px solid ${({ theme }) => theme.bgLight};
    object-fit: cover;
`

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card 
            onClick={() => setOpenModal({ state: true, project: project })}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Image src={project.image} alt={project.title} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <DateStr>{project.date}</DateStr>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img} />
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards