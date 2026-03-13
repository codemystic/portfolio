import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
    align-items: center;
    padding: 0;
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
    gap: 20px;
    padding: 20px 0;

    @media (max-width: 960px) {
        padding: 10px 0;
    }
`;

export const Title = styled.h2`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 42px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.04em;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  max-width: 650px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 0 16px;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 20px;
  padding: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary}40;
  }
`;

export const SkillName = styled.h3`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  letter-spacing: -0.02em;
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
  background: ${({ theme }) => theme.bgLight};
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
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
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding: 10px 24px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
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