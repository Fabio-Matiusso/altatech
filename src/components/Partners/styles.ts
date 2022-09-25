import styled from 'styled-components';
import { Even } from './types';

export const Container = styled.article`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: calc(8px + 1.5625vw);
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

  &:hover {
    opacity: 0.8;
    transition: width 0.3s;
  }

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

export const BoxCarousel = styled.div`
  max-width: 100%;
`;
