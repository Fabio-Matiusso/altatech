import IconAltatech from '../../assets/logos-altatech/icon-altatech.svg';
import Fade from 'react-reveal';
import {
  Container,
  Question,
  Title,
  Icon,
  ContainerClients,
  ClientCard,
  Paragraph,
  ClientInfos,
  ClientImage,
  ClientDatas,
  TextClientInfos,
  HiddenTitle,
} from './styles';
import { clients } from './datas';

export default function Depositions() {
  return (
    <Container>
      <HiddenTitle>O que nossos clientes estão dizendo?</HiddenTitle>
      <Question>
        <Title>O que nossos clientes estão dizendo?</Title>
        <Icon src={IconAltatech} />
      </Question>

      <ContainerClients>
        {clients.map((client) => (
          <Fade right cascade>
            <ClientCard>
              <Paragraph>{client.deposition}</Paragraph>
              <ClientInfos>
                <ClientImage src={client.clientImage} />
                <ClientDatas>
                  <TextClientInfos>{client.clientName}</TextClientInfos>
                  <TextClientInfos>{client.customerCharge}</TextClientInfos>
                </ClientDatas>
              </ClientInfos>
            </ClientCard>
          </Fade>
        ))}
      </ContainerClients>
    </Container>
  );
}
