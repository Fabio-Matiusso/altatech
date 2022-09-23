import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: auto 100px;
  gap: 20px;
  height: 40vh;
  align-content: center;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 12;
  justify-content: start;
  margin: 0px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(12, min-max(0px, ifr));
  grid-template-rows: auto;
  align-items: center;
  grid-column: span 12;
  gap: 15px;
  height: 300px;
  max-width: 100%;

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
    height: 600px;
  }
`;

export const Button = styled.button`
  background-color: #203c87;
  border: none;
  width: 300px;
  padding: 10px 0px;
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
  grid-column: span 12;
  justify-self: center;

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

// export const ContainerInput = styled.div`
//   padding: 15px;
// `;

export const Error = styled.div`
  color: red;
  padding-left: 10px;
  grid-column: span 12;

  @media (max-width: 600px){
    width: 100%;
  }
`;

export const ErrorTel = styled.div`
  grid-column: 7;
  grid-row: 4;
  width: 200px;
  color: red;
  grid-column: span 6;
  padding-left: 10px;

  @media (max-width: 600px){
    width: 100%;
  }
`;

export const ErrorCnpj = styled.div`
  color: red;
  grid-column: 1;
  grid-row: 4;
  justify-self: start;
  grid-column: span 6;
  padding-left: 10px;

  @media (max-width: 600px){
    width: 100%;
  }
`;