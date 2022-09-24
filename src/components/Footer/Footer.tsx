import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #203c87;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

export default function Footer() {
  return (
    <ContainerFooter>
      <ContainerFooter>a</ContainerFooter>
    </ContainerFooter>
  );
}
