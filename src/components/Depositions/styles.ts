import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: calc(8px + 1.5625vw);
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  grid-column: span 6;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
`;

export const Icon = styled.img`
  max-width: 70%;
`;

export const ContainerClients = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: span 6;
  gap: 20px;

  @media (max-width: 900px) {
    grid-column: span 12;
  }

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const ClientCard = styled.div`
  background-color: #eff0f2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const ClientInfos = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;
  gap: 10px;
  padding-top: 8px;
`;

export const ClientImage = styled.img`
  width: 40px;
`;

export const ClientDatas = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const TextClientInfos = styled.p`
  font-size: 0.8rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const HiddenTitle = styled.h1`
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 900px) {
    font-size: 3rem;
    font-weight: 400;
    display: block;
    grid-column: span 12;
    text-align: center;
    align-self: center;
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
    padding: 40px;
  }
`;