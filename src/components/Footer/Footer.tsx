import { FooterTypes } from './types';
import {
  ContainerFooter,
  Container,
  Infos,
  Title,
  Item,
  Medias,
  Image,
} from './styles';
import { footer } from '../../constants/constants';

export default function Footer() {
  return (
    <ContainerFooter>
      <Container>
        {footer.map(({ title, items, medias }: FooterTypes, index) => (
          <Infos key={`footer-content-${index}`}>
            <Title>{title}</Title>
            <Medias>
              {' '}
              {index === 3 &&
                medias?.map((media) => <Image src={media} key={media} />)}{' '}
            </Medias>
            {items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </Infos>
        ))}
      </Container>
    </ContainerFooter>
  );
}
