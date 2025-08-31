import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
    align-items: center;
    padding: 24px 0px 32px 0px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    margin: 12px;
    @media (max-width: 960px) {
        padding: 20px 0px 28px 0px;
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
    padding: 24px 0px 32px 0;
    gap: 16px;
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 20px 0px 28px 0;
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

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 18px;
    border-radius: 15px;
    font-weight: 600;
    margin: 30px 0px;
    box-shadow: 0px 4px 15px rgba(30, 64, 175, 0.1);
    @media (max-width: 768px) {
        font-size: 14px;
        margin: 25px 0px;
    }
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
