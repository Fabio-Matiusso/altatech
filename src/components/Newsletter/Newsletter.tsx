import { ChangeEvent, useState } from 'react';
import MailIcon from '../../assets/icons/mail.svg';
import {
  Container,
  CallToAction,
  Title,
  Paragraph,
  MailImage,
  Input,
  Button,
} from './styles';

export default function Newsletter() {
  const [email, setEmail] = useState<string>('');

  const handleMailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <CallToAction>
        <Title>Quer ficar por dentro das nossas notícias?</Title>
        <Paragraph>
          Assine nossa newsletter. Não se preocupe, também não gostamos de spam!
        </Paragraph>
        <Input
          value={email}
          onChange={handleMailValue}
          placeholder="Digite seu email"
        />
        <Button>Inscrever-se</Button>
      </CallToAction>
      <MailImage src={MailIcon} />
    </Container>
  );
}
