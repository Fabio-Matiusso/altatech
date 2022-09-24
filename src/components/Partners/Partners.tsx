import Carousel from 'nuka-carousel/lib/carousel';
import { useState } from 'react';
import { emprises } from './datas';
import {
  Container,
  Title,
  Card,
  IconCard,
  Image,
  PartnerName,
  BoxCarousel,
} from './styles';
import { Even, Emprises } from './types';

export default function Partners() {
  const [even, setEven] = useState<boolean>(false);

  return (
    <Container>
      <Title>Parceiros</Title>
      <BoxCarousel style={{ maxWidth: '100%' }}>
        <Carousel
          slidesToShow={4}
          wrapAround={true}
          autoplay={true}
          autoplayInterval={1500}
          cellSpacing={8}
        >
          {emprises.map(({ photo }: Emprises, index) => (
            <Card key={photo}>
              <IconCard isEven={index % 2 === 0 ? even : !even}>
                <Image src={photo} />
              </IconCard>
            </Card>
          ))}
        </Carousel>
      </BoxCarousel>
    </Container>
  );
}