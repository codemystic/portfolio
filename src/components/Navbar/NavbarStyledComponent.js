import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background: ${({ theme }) => theme.bgLight}cc;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid ${({ theme }) => theme.card_light};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: all 0.3s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: -0.02em;
    
    @media (max-width: 640px) {
      font-size: 20px;
    }
`;

export const Span = styled.div`
    color: ${({ theme }) => theme.primary};
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    opacity: 0.8;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      opacity: 1;
    }

    &.active {
      color: ${({ theme }) => theme.primary};
      opacity: 1;
    }
`;

export const GitHubButton = styled.a`
  border: 1.5px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 10px 24px;
  font-weight: 700;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -5px ${({ theme }) => theme.primary}60;
  }
  
  @media screen and (max-width: 768px) { 
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 24px 40px;
    background: ${({ theme }) => theme.bgLight};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-120%)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    z-index: 999;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid ${({ theme }) => theme.card_light};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style: none;
`;

export const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: white;
  width: 100%;
  max-width: 250px;
  text-align: center;
  padding: 14px 24px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -5px ${({ theme }) => theme.primary}60;
  }
`;