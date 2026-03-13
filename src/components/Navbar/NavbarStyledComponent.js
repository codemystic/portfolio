import { NavLink as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background: ${({ theme }) => theme.bgLight}cc;
    height: 72px;
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
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -0.05em;
    gap: 0;
    
    @media (max-width: 640px) {
      font-size: 24px;
    }
`;

export const Span = styled.span`
    background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.text_primary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 900;
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 12px;
    position: relative;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.primary}10;
      transform: translateY(-1px);
    }

    &.active {
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.primary}15;
    }
`;

export const GitHubButton = styled.a`
  border: none;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  padding: 10px 24px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.04em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px -3px ${({ theme }) => theme.primary}40;
  
  &:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 10px 25px -5px ${({ theme }) => theme.primary}60;
    filter: brightness(1.1);
  }
  
  @media screen and (max-width: 768px) { 
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 12px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light}40;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;

  &:hover {
    background: ${({ theme }) => theme.primary}20;
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1) rotate(10deg);
  }

  @media screen and (max-width: 768px) {
    padding: 6px;
    font-size: 18px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    transition: all 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: rotate(90deg);
    }
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 72px;
    right: 0;
    width: 100%;
    padding: 24px 32px;
    background: ${({ theme }) => theme.bgLight}e6;
    backdrop-filter: blur(40px) saturate(200%);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-120%)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    z-index: 999;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid ${({ theme }) => theme.primary}20;
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

export const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  padding: 12px 30px;
  border-radius: 12px;
  width: 100%;
  text-align: center;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}10;
  }
`;

export const MobileMenuButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: white;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 16px 24px;
  border-radius: 14px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: center;
  margin-top: 15px;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.primary}60;
  
  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 15px 40px -10px ${({ theme }) => theme.primary}80;
    filter: brightness(1.1);
  }
`;