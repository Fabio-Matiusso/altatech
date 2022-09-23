import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  align-content: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  color: #222;
  grid-column: 1 / 8;
  height: 80%;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    height: 70%;
    justify-content: center;
    gap: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 3.125rem;
  span {
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  height: 250px;

  span {
    font-weight: 600;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.375rem;

  @media (max-width: 1200px) {
    font-size: 1.225rem;
  }
`;

export const Button = styled.button`
  background-color: #203c87;
  border: none;
  width: 250px;
  padding: 8px;
  border-radius: 8px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #f4f5f7;
  cursor: pointer;
  background-position: center;
  transition: background 0.5s;

  &:hover {
    background: #5198C7 radial-gradient(circle, transparent 1%, #5198C7 1%) center/15000%;
    font-weight: 700;
  }

  &:active {
    background-color: #203C87;
    background-size: 100%;
    transition: background 0s;
  }

  @media (max-width: 1200px) {
    font-size: 1.125rem;
  }

  @media (max-width: 600px) {
    width: 180px;
    height: 40px;
    padding: 15px;
  }
`;

export const ContainerLogo = styled.div`
  grid-column: 8 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  grid-column: 9 / 12;
  align-self: baseline;
  display: block;
`;
