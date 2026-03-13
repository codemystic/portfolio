import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
    align-items: center;
    padding: 20px 0;
    width: 100%;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    gap: 32px;
    padding: 40px 0;

    @media (max-width: 960px) {
        padding: 32px 0;
    }
`;

export const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 19px;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  padding: 0 16px;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const SkillCard = styled.div`
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 24px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary}30;
  }
`;

export const SkillName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const SkillTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const TechLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary}08;
    border-color: ${({ theme }) => theme.primary}50;
    transform: scale(1.05);
  }
  
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const TechName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    background: ${({ theme }) => theme.bgLight};
    border: 1px solid ${({ theme }) => theme.card_light};
    color: ${({ theme }) => theme.primary};
    padding: 6px;
    border-radius: 14px;
    margin: 24px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const ToggleButton = styled.div`
    padding: 10px 24px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    
    ${({ active, theme }) =>
    active && `
    background: ${theme.primary};
    color: white;
    `
  }
    &:hover {
        background: ${({ active, theme }) => !active && theme.primary + '15'};
    }
`;

export const Divider = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.card_light};
    margin: 0 4px;
`;