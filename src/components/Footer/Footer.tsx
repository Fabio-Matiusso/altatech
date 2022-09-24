import styled from 'styled-components';
import { FooterTypes } from './types';
import FacebookIcon from '../../assets/icons/facebook.svg';
import YoutubeIcon from '../../assets/icons/youtube.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';

export const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #203c87;
  padding: calc(8px + 1.5625vw);
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: purple;
  opacity: 0.7;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

export const Infos = styled.div`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const Item = styled.p`
  font-size: 1rem;
`;

export const Medias = styled.div`
  display: flex;
  gap: 10px;
`;

export const Image = styled.img`
  max-width: 33%;
`;

export default function Footer() {
  const footer: FooterTypes[] = [
    {
      title: 'Políticas',
      items: [
        'Política de privacidade',
        'Política de Cookies',
        'Política de Cancelamento',
        'Política Comercial',
        'Política de Garantia',
        'LGPD',
      ],
    },
    { title: 'Termos', items: ['Termos de uso', 'Termo de Adesão Cloud'] },
    {
      title: 'Informações gerais',
      items: [
        'Atendimento de Segunda a Sexta das 08:00 às 18:00',
        'Av. Juscelino Kubitscheck, 1905 - Centro',
        'CEP 86010-540 - Londrina - PR',
        'comercial@altatech.com.br',
      ],
    },
    {
      title: 'Acompanhe nossas redes sociais',
      medias: [FacebookIcon, YoutubeIcon, InstagramIcon],
      items: [
        'Copyright © 2022',
        'Todos os Direitos Reservados',
        'CNPJ: 05.365.132/0001-30',
      ],
    },
  ];

  return (
    <ContainerFooter>
      <Container>
        {footer.map(({ title, items, medias }: FooterTypes, index) => (
          <Infos key={title}>
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
