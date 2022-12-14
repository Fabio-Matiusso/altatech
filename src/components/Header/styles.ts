import styled from 'styled-components';
import { Props } from './types';

// Header
export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #213b89;
  color: #f4f5f7;
  padding: calc(8px + 1.5625vw);
  box-shadow: 0 0 8px #f4f5f7;
`;

// Navegação
export const NavStyled = styled.nav`
  display: flex;
  color: white;
  list-style: none;
  margin: 0px;
  padding: 0px;
  height: 60px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  z-index: 999;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 33%;
  text-align: center;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
    
  &:hover {
    font-weight: 700;
    transition: width 0.3s;
  }
`;

export const ContainerImage = styled.div`
  width: 33%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

// Menu Hamburguer
export const StyledBurger = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: #fff;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

// Componentes Menu Lateral
export const Ul = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 33%;
  display: none;
  text-align: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: block;
    flex-flow: column nowrap;
    background-color: #213b89;
    justify-content: start;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const LiStyled = styled.li`
  cursor: pointer;
  list-style: none;
  margin: 0px;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  background-color: #f4f5f7;
  color: #222;
  box-shadow: 4px 4px 16px rgba(28, 32, 62, 0.5);
  text-decoration: none;
`;

export const ContainerIcon = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const MobileIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const DatasAltatech = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  display: block;
`;
