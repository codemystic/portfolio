import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  background: linear-gradient(180deg, ${({ theme }) => theme.bgLight} 0%, ${({ theme }) => theme.bg} 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 30px 0 30px;
  
  @media (max-width: 960px) {
    padding: 20px 16px;
  }
  
  @media (max-width: 640px) {
    padding: 10px 16px;
  }
  
  z-index: 1;
  border-bottom: 2px solid ${({ theme }) => theme.primary}10;
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
  opacity: 0.4;
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
  border: 4px solid ${({ theme }) => theme.primary}30;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 40px 80px -12px rgba(0, 0, 0, 0.3);
    border-color: ${({ theme }) => theme.primary}60;
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
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: 52px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  margin-bottom: 12px;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 640px) {
    font-size: 34px;
  }
`;

export const TextLoop = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  margin-bottom: 24px;
  letter-spacing: -0.01em;

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
  font-weight: 800;
  
  .Typewriter__cursor {
    color: ${({ theme }) => theme.primary};
    font-weight: 900;
  }
`;

export const SubTitle = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 19px;
  font-weight: 500;
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
  max-width: 300px;
  text-align: center;
  padding: 18px 36px;
  color: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.primary}80;
  
  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.primary}ee;
    box-shadow: 0 20px 40px -10px ${({ theme }) => theme.primary}80;
  }

  @media (max-width: 640px) {
    padding: 14px 28px;
    font-size: 16px;
  }
`;
