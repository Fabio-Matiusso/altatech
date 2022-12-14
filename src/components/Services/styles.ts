import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: calc(8px + 1.5625vw);
`;

export const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  grid-column: 1 / -1;
  font-size: 2rem;
`;

export const SuperiorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: #213b89;
  border-radius: 8px;
  grid-column: span 3;
  padding: 10px;
  
  &:hover {
    box-shadow: 0 0 15px #213b89;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    grid-column: span 6;
  }

  @media (max-width: 600px) {
    grid-column: span 12;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 15px;
  }
`;

export const Image = styled.img`
  max-width: 100px;
`;

export const Text = styled.p`
  font-style: normal;
  font-size: 1.4rem;
  line-height: 44px;
  color: #f4f5f7;
  font-weight: 500;


  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const InferiorCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  padding: 0px 30px;
  grid-column: span 12;
  background-color: #213b89;
  border-radius: 8px;
  height: 120px;

  &:hover {
    box-shadow: 0 0 15px #213b89;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    justify-content: space-evenly;
    word-wrap: break-word;
  }
`;

export const ProductsIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
