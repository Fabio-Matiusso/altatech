import { useState, ChangeEvent } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
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
} from './styles';

export const InputStyled = styled.input`
  grid-column: span 12;
  background: #f4f5f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 1.1rem;
  padding: 8px 10px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputCnpjAndTel = styled.input`
  background: #f4f5f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  outline: none;
  border: none;
  max-height: 40px;
  font-size: 1.1rem;
  padding: 8px 10px;
  grid-column: span 6;
  max-width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  grid-column: span 12;
  background: #f4f5f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  padding: 8px 10px;
  font-size: 1.1rem;
  border-radius: 10px;
  height: 200px;
  margin-top: 5px;
  resize: none;

  @media (max-width: 600px) {
    width: 100%;
    height: 300px;
  }
`;

interface FormProps {
  name: string;
  cnpj: string;
  phone: string;
  email: string;
  message: string;
}

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'O nome deve conter, pelo menos, um caractere')
    .required('Preencha seu nome completo'),

  cnpj: Yup.string()
    .min(14, 'O CNPJ deve conter 14 dígitos')
    .required('Preencha seu CNPJ'),

  phone: Yup.string()
    .required('Preencha seu telefone')
    .min(8, 'O telefone deve ter, no mínimo, 8 números'),

  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Preencha seu E-mail'),
  message: Yup.string().required('Digite sua mensagem'),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: FormProps) => {
    alert(JSON.stringify(data));
  };

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

        <InputCnpjAndTel {...register('cnpj')} placeholder="CNPJ" />
        <ErrorCnpj>{errors.cnpj?.message}</ErrorCnpj>

        <InputCnpjAndTel {...register('phone')} placeholder="Telefone" />
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
