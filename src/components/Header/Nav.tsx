import Burger from './Burger';
import Logo from '../../assets/logos-altatech/logo-altatech.svg';
import { Links } from './types';
import { paths } from '../../constants/constants';
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

export default function Nav() {
  return (
    <NavStyled>
      <Container>
        <Box>
          <ContainerImage>
            <Image src={Logo} />
          </ContainerImage>
          {paths.map(({ items, shop, user }: Links, index) => (
            <React.Fragment key={`web-nav-${index}`}>
              <List>
                {items.map((item) => (
                  <ListItem key={`web-nav-${item}`}>{item}</ListItem>
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
