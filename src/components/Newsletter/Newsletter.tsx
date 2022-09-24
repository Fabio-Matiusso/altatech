import { ChangeEvent, useState } from 'react';
import MailIcon from '../../assets/icons/mail.svg';
import {
  Box,
  Container,
  CallToAction,
  Title,
  Paragraph,
  MailImage,
  Form,
  Input,
  Button,
} from './styles';
import { Error } from '../Form/styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface EmailProps {
  email: string;
}

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Preencha seu E-mail'),
});

export default function Newsletter() {
  const [email, setEmail] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailProps>({
    resolver: yupResolver(formSchema),
  });

  const handleMailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = (data: EmailProps) => {
    alert(JSON.stringify(data));
  };

  return (
    <Box>
      <Container>
        <CallToAction>
          <Title>Quer ficar por dentro das nossas notícias?</Title>
          <Paragraph>
            Assine nossa newsletter. Não se preocupe, também não gostamos de
            spam!
          </Paragraph>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('email')}
              value={email}
              onChange={handleMailValue}
              placeholder="Digite seu email"
            />
            <Error>{errors.email?.message}</Error>
            <Button type="submit">Inscrever-se</Button>
          </Form>
        </CallToAction>
        <MailImage src={MailIcon} />
      </Container>
    </Box>
  );
}
