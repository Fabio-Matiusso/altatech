import React, { Fragment } from 'react';
import { Props, Links } from './types';
import { paths } from './Nav';
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
      {paths.map(({ items, shop, user }: Links) => (
        <React.Fragment>
          {items.map((item) => (
            <LiStyled key={item}>{item}</LiStyled>
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
