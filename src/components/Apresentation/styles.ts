import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: calc(8px + 1.5625vw);
  align-content: center;
  padding-top: 80px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  color: #222;
  grid-column: 1 / 8;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    justify-content: center;
    gap: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 3.125rem;
  span {
    font-weight: 800;
  }

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;

  span {
    font-weight: 600;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.1rem;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  background-color: #213b89;
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
    background: #5198c7 radial-gradient(circle, transparent 1%, #5198c7 1%)
      center/15000%;
    font-weight: 700;
  }

  &:active {
    background-color: #213b89;
    background-size: 100%;
    transition: background 0s;
  }

  @media (max-width: 1200px) {
    font-size: 1.125rem;
  }

  @media (max-width: 600px) {
    width: 180px;
    padding: 15px;
  }
`;

export const ContainerLogo = styled.div`
  grid-column: 8 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  grid-column: 9 / 12;
  align-self: baseline;
  display: block;
  align-self: flex-end;
`;
