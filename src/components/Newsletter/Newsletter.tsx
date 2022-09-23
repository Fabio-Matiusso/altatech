import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import MailIcon from '../../assets/icons/mail.svg';

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: 15px;
  background-color: #eff0f2;

  @media (max-width: 900px) {
    height: 60vh;
  }

  @media (max-width: 600px) {
    height: 100vh;
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  grid-column: span 8;

  @media (max-width: 900px) {
    grid-column: span 12;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const MailImage = styled.img`
  max-width: 70%;
  grid-column: span 4;
  justify-self: end;
  align-self: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Input = styled.input`
  background-color: #f4f5f7;
  border-radius: 5px;
  padding: 8px;
  border: 1px solid #203c87;
  font-size: 1rem;
  max-width: 80%;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px){
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: #203c87;
  border: none;
  width: 180px;
  padding: 6px;
  border-radius: 8px;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #f4f5f7;
  cursor: pointer;
  background-position: center;
  transition: background 0.5s;

  &:hover {
    background: #5198c7 radial-gradient(circle, transparent 1%, #5198c7 1%)
      center/15000%;
    font-weight: 600;
  }

  &:active {
    background-color: #203c87;
    background-size: 100%;
    transition: background 0s;
  }
`;

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
