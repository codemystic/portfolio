import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px;
  
  @media (max-width: 960px) {
    padding: 80px 16px;
  }
  
  @media (max-width: 640px) {
    padding: 60px 16px;
  }
  
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.card_light};
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
  
  @media (max-width: 960px) {
    margin-bottom: 40px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary}20;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: 640px) {
    width: 260px;
    height: 260px;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 56px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 24px;
    justify-content: center;
  }

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  
  .Typewriter__cursor {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const ResumeButton = styled.a`
  text-decoration: none;
  width: 100%;
  max-width: 280px;
  text-align: center;
  padding: 16px 32px;
  color: #ffffff;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 10px 20px -10px ${({ theme }) => theme.primary};
  
  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.primary}dd;
    box-shadow: 0 15px 30px -10px ${({ theme }) => theme.primary}80;
  }

  @media (max-width: 640px) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;
