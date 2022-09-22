import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../../assets/logos-altatech/logo-altatech.svg';
import { Props, Links } from './types';
import ShopIcon from '../../assets/icons/shop.svg';
import UserIcon from '../../assets/icons/user.svg';
import React from 'react';
import {
  NavStyled,
  Box,
  List,
  ListItem,
  ContainerImage,
  Image,
  Container,
  ContainerIcons,
  Icon,
} from './styles';

export const paths: Links[] = [
  {
    items: ['Produtos', 'Serviços', 'Locação', 'Cloud'],
    shop: ShopIcon,
    user: UserIcon,
  },
];

export default function Nav() {
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
                    <Icon src={user} alt="Área do usuário" />
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
