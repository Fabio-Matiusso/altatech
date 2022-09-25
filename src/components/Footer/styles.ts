import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #203c87;
  padding: calc(8px + 1.5625vw);
  color: #f4f5f7;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 30px;

  @media (max-width: 900px) {
    gap: 15px;
  }
`;

export const Infos = styled.div`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;

  @media (max-width: 900px) {
    grid-column: span 12;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const Item = styled.p`
  font-size: 1rem;
  cursor: pointer;
`;

export const Medias = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;
`;

export const Image = styled.img`
  max-width: 33%;
`;
