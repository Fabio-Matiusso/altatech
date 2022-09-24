import styled from "styled-components";


export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-content: center;
  padding-top: 180px;

  @media (max-width: 600px){
    padding-top: 380px;
  }

  @media (max-width: 400px){
    padding-top: 600px;
  }
`

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-column: span 12;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: 15px;
  background-color: #eff0f2;
  align-content: center;
  justify-items: center;
 
  @media (max-width: 600px) {

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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.input`
  background-color: #f4f5f7;
  border-radius: 5px;
  padding: 8px;
  border: none;
  font-size: 1rem;
  max-width: 80%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px){
    font-size: 0.8rem;
    width: 100%;
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
