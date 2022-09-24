import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-content: center;
  padding: calc(8px + 1.5625vw);
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