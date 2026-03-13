import styled from 'styled-components';
import _default from '../../themes/default';

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
    padding: 20px 0;
    gap: 24px;
    
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
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
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
`

export const ToggleButton = styled.div`
    padding: 12px 24px;
    border-radius: 10px;
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
        border-radius: 8px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;
