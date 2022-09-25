import Carousel from 'nuka-carousel/lib/carousel';
import { useState } from 'react';
import { Container, Title, Card, IconCard, Image, BoxCarousel } from './styles';
import { photos } from '../../constants/constants';
import { screenTablet } from '../../constants/constants';

export default function Partners() {
  const [even, setEven] = useState<boolean>(false);

  return (
    <Container>
      <Title>Parceiros</Title>
      <BoxCarousel style={{ maxWidth: '100%' }}>
        <Carousel
          slidesToShow={screenTablet.matches ? 2 : 4}
          wrapAround={true}
          autoplay={true}
          autoplayInterval={1000}
          cellSpacing={8}
          defaultControlsConfig={{
            nextButtonStyle: {
              padding: '20px',
              position: 'absolute',
              top: '90px',
              right: '-60px',
            },
            prevButtonStyle: {
              padding: '20px',
              position: 'absolute',
              top: '90px',
              left: '-60px',
            },
            nextButtonText: '->',
            prevButtonText: '<-',
          }}
        >
          {photos.map((photo, index) => (
            <Card key={`photo-${index}`}>
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
