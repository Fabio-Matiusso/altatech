import styled from 'styled-components';
import Nav from './Nav';

export const HeaderStyled = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #203c87;
  color: #f4f5f7;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Nav />
    </HeaderStyled>
  );
}
