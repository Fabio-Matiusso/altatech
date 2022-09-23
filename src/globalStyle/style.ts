import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Roboto';
  }

  body{
    background: #F4F5F7;
    color: #222;
  }
`;
