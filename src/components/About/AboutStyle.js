import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
    align-items: center;
    padding: 20px 0px 24px 0px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    margin: 12px;
    @media (max-width: 960px) {
        padding: 16px 0px 20px 0px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    gap: 16px;
    padding: 20px 0;
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 16px 0;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 16px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 700px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const SkillsGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 12px;
  }
`;

export const SkillCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 20px 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #60a5fa, #3b82f6, ${({ theme }) => theme.primary});
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.primary}40;
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

export const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}15, ${({ theme }) => theme.primary}25);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  
  ${SkillCard}:hover & {
    transform: scale(1.1);
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}25, ${({ theme }) => theme.primary}35);
  }
  
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const SkillName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #60a5fa);
    border-radius: 2px;
  }
`;

export const SkillTag = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  justify-items: center;
  align-items: stretch;
  width: 100%;
`;

export const TechLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 8px;
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #60a5fa);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(145deg, #ffffff 0%, ${({ theme }) => theme.primary}05 100%);
    border-color: ${({ theme }) => theme.primary}40;
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

export const TechName = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  line-height: 1.3;
  letter-spacing: 0.02em;
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 600;
    margin: 24px 0px;
    box-shadow: 0px 4px 15px rgba(30, 64, 175, 0.1);
    @media (max-width: 768px) {
        font-size: 14px;
        margin: 20px 0px;
    }
`;

export const ToggleButton = styled.div`
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 15};
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
        border-radius: 6px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;