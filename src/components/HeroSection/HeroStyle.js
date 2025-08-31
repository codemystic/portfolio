import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px;
  @media (max-width: 960px) {
    padding: 80px 16px;
  }
  @media (max-width: 640) {
    padding: 60px 16px;
  }
  z-index: 1;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  min-height: 400px;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    min-height: 280px;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  align-items: center;
  gap: 12px;
  min-height: 400px;
  @media (max-width: 768px) {
    min-height: 350px;
  }
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
    min-height: 280px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.card};
  display: block;
  min-width: 400px;
  min-height: 400px;
  box-sizing: border-box;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
    min-width: 350px;
    min-height: 350px;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
    min-width: 280px;
    min-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: #3b82f6 !important;
  cursor: pointer;
  
  .Typewriter__cursor {
    color: #3b82f6 !important;
  }
  
  .Typewriter__wrapper {
    color: #3b82f6 !important;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: #ffffff;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    filter: brightness(1);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
