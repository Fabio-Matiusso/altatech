import styled from 'styled-components';
import Icon from '../../assets/logos-altatech/icon-altatech.svg';
import Fade from 'react-reveal';
import {
  Container,
  Info,
  Title,
  Description,
  Paragraph,
  Button,
  ContainerLogo,
  Logo,
} from './styles';

export default function Apresentation() {
  return (
    <Container>
      <Info>
        <Fade left cascade>
          <Title>
            O <span>ecossistema</span> que sua empresa <span>precisa</span>, em
            um só lugar!
          </Title>
          <Description>
            <Paragraph>
              Desde 2002 no mercado corporativo e com mais de{' '}
              <span>21.000 clientes</span> atendidos em todo Brasil.
            </Paragraph>
            <Paragraph>
              A Altatech é uma empresa com <span>foco</span> em projetos de
              tecnologia, segurança da informação, consultoria e revenda das
              principais marcas na área de tecnologia.
            </Paragraph>
            <Paragraph>
              Nosso principal motivo de existência é entregar a{' '}
              <span>confiança</span> na utilização de recursos tecnológicos.
            </Paragraph>
            <Button>Saiba mais</Button>
          </Description>
        </Fade>
      </Info>

      <ContainerLogo>
        <Fade right>
          <Logo src={Icon} />
        </Fade>
      </ContainerLogo>
    </Container>
  );
}
