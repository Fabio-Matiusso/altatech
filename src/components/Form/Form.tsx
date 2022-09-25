import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Container,
  CallToAction,
  Title,
  Paragraph,
  FormContainer,
  Error,
  ErrorCnpj,
  ErrorTel,
  Button,
  InputStyled,
  InputCnpjAndTel,
  TextArea,
} from './styles';
import { mask, unMask } from 'remask';
import { ChangeEvent, useState } from 'react';
import { formSchema } from '../../constants/constants';
import { FormProps } from './types';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: FormProps) => {
    alert(JSON.stringify(data));
  };

  const [cnpj, setCnpj] = useState<string>('');

  const [phone, setPhone] = useState<string>('');

  return (
    <Container>
      <CallToAction>
        <Title>Ficou interessado(a)?</Title>
        <Paragraph>
          Solicite um orçamento e entraremos em contato com você o mais breve
          possível!
        </Paragraph>
      </CallToAction>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputStyled {...register('name')} placeholder="Nome completo" />
        <Error>{errors.name?.message}</Error>

        <InputCnpjAndTel
          {...register('cnpj')}
          value={cnpj}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCnpj(mask(unMask(e.target.value), ['99.999.999/9999-99']))
          }
          placeholder="CNPJ"
        />
        <ErrorCnpj>{errors.cnpj?.message}</ErrorCnpj>

        <InputCnpjAndTel
          {...register('phone')}
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(
              mask(unMask(e.target.value), [
                '(99) 9999-9999',
                '(99) 9 9999-9999',
              ]),
            )
          }
          placeholder="Telefone"
        />
        <ErrorTel>{errors.phone?.message}</ErrorTel>

        <InputStyled {...register('email')} placeholder="E-mail" />
        <Error>{errors.email?.message}</Error>

        <TextArea {...register('message')} placeholder="Mensagem" />
        <Error>{errors.message?.message}</Error>

        <Button type="submit">Solicitar orçamento</Button>
      </FormContainer>
    </Container>
  );
}
