import styled from 'styled-components';
import Nav from './Nav';
import { HeaderStyled } from './styles';

export default function Header() {
  return (
    <HeaderStyled>
      <Nav />
    </HeaderStyled>
  );
}
