import styled from "styled-components";


export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  height: 120vh;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-columns: repeat(1, 1fr);
  align-content: center;

  @media (max-width: 600px) {
    padding-top: 900px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  justify-self: flex-start;
  width: 80%;
  margin: 0 auto;
  grid-column: span 12;
  font-weight: 500;
`;

export const Question = styled.h1`
  font-size: 1.5rem;
`;