import React from 'react';
import { paths } from '../../constants/constants';
import { Props, Links } from './types';
import {
  Ul,
  LiStyled,
  ContainerIcon,
  MobileIcon,
  DatasAltatech,
  Paragraph,
} from './styles';

export default function RightNav({ open }: Props) {
  return (
    <Ul open={open}>
      {paths.map(({ items, shop, user }: Links, index) => (
        <React.Fragment key={`mobile-nav-${index}`}>
          {items.map((item) => (
            <LiStyled key={`mobile-nav-${item}`}>{item}</LiStyled>
          ))}
          <ContainerIcon>
            <MobileIcon src={shop} />
            <MobileIcon src={user} />
          </ContainerIcon>

          <DatasAltatech>
            <Paragraph>Copyright © 2022 </Paragraph>
            <Paragraph>Todos os Direitos Reservados</Paragraph>
            <Paragraph>CNPJ: 05.365.132/0001-30</Paragraph>
          </DatasAltatech>
        </React.Fragment>
      ))}
    </Ul>
  );
}
