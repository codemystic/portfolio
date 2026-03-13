import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/me.jpg'
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                            <TextLoop>
                                I am 
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                            <SubTitle>{Bio.description}</SubTitle>
                            <ResumeButton href={Bio.resume} target='_blank' rel='noopener noreferrer'>Check Resume</ResumeButton>
                        </motion.div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Img 
                                    src={Bio.image || HeroImg} 
                                    alt="hero-image" 
                                />
                            </motion.div>
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;