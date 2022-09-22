import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

export const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  grid-column: 1 / -1;
`;

export const SuperiorCard = styled.div`
  display: flex;
  height: 250px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: #203c87;
  border-radius: 30px;
  grid-column: span 3;
  padding: 10px;

@media (max-width: 900px) {
  grid-column: span 6;
}
`;

export const Image = styled.img`
max-width: 100px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 44px;
  color: #f4f5f7;

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
  background-color: #203c87;
  border-radius: 15px;
  height: 120px;

@media (max-width: 600px) {
  overflow-x: hidden;
}
`;

export const ProductsIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
