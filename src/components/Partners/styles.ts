import styled from "styled-components";
import { Even } from "./types";


export const Container = styled.article`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  font-size: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`;

export const IconCard = styled.div<Even>`
  height: 80%;
  background-color: ${({ isEven }) => (isEven ? '#203C87' : '#5198C7')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;

export const PartnerName = styled.div`
  color: #222222;
  font-size: 2rem;
  font-weight: 500;
  background-color: #fff;
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const BoxCarousel = styled.div`
  max-width: 100%;
`;
