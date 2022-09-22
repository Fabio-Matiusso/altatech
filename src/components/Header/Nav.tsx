import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../../assets/logos-altatech/logo-altatech.svg';
import { Props, Links } from './types';
import ShopIcon from '../../assets/icons/shop.svg';
import UserIcon from '../../assets/icons/user.svg';
import React from 'react';

export const NavStyled = styled.nav`
  padding: 0 20px;
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
  justify-content: space-between;
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
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export default function Nav() {
  const paths: Links[] = [
    {
      items: ['Produtos', 'Serviços', 'Locação', 'Cloud'],
      shop: ShopIcon,
      user: UserIcon,
    },
  ];

  return (
    <NavStyled>
      <Container>
        <Box>
          <ContainerImage>
            <Image src={Logo} />
          </ContainerImage>
          {paths.map(({ items, shop, user }: Links) => (
            <React.Fragment>
              <List>
                {items.map((item) => (
                  <ListItem>{item}</ListItem>
                ))}
              </List>

              <ContainerIcons>
                <List>
                  <ListItem>
                    <Icon src={shop} alt="Carrinho de compras" />
                  </ListItem>
                  <ListItem>
                    <Icon src={user} alt="Área do" />
                  </ListItem>
                </List>
              </ContainerIcons>
            </React.Fragment>
          ))}
        </Box>
        <Burger />
      </Container>
    </NavStyled>
  );
}
