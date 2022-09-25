import React from 'react';
import WebCamIcon from '../../assets/services/products/webcam.svg';
import ComputerIcon from '../../assets/services/products/computer.svg';
import { weOffer, Products } from './types';
import {
  Container,
  Title,
  SuperiorCard,
  Image,
  Text,
  InferiorCard,
  ProductsIcons,
} from './styles';
import {
  screenTablet,
  breakpointTablet,
  screenSmartphone,
  breakpointSmartphone,
} from '../../constants/constants';
import { services, products } from '../../constants/constants';

export default function Services() {
  return (
    <Container>
      <Title>Conheça nossos serviços!</Title>
      {services.map(({ service, icon }: weOffer) => (
        <React.Fragment>
          <SuperiorCard key={service}>
            <Image src={icon} />
            <Text>{service}</Text>
          </SuperiorCard>
        </React.Fragment>
      ))}
      <InferiorCard>
        {products.map(({ service, icons }: Products) => (
          <React.Fragment key={service}>
            <Text>{service}</Text>
            <ProductsIcons>
              {!screenTablet.matches &&
                icons.map((icon) => <Image key={icon} src={icon} />)}

              {screenTablet.matches &&
                breakpointTablet.matches &&
                icons
                  .map((icon) => <Image key={icon} src={icon} />)
                  .filter(
                    (icon) =>
                      icon.key === ComputerIcon ||
                      (icon.key === WebCamIcon && <Image src={icon.key} />),
                  )}

              {screenSmartphone.matches &&
                breakpointSmartphone.matches &&
                icons
                  .map((icon) => <Image key={icon} src={icon} />)
                  .filter(
                    (icon) =>
                      icon.key === ComputerIcon && <Image src={icon.key} />,
                  )}
            </ProductsIcons>
          </React.Fragment>
        ))}
      </InferiorCard>
    </Container>
  );
}
