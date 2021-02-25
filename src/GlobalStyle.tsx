import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import MontserratRegular from './assets/Montserrat/Montserrat-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
};
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src:   url(${MontserratRegular}) format('truetype');
}
body {
    background: ${colors.white10};
}
`;
