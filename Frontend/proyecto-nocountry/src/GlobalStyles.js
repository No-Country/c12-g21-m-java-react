import {
  createGlobalStyle
} from 'styled-components';
import {
  theme
} from './assets/styles'; 

const GlobalStyles = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.palette.background.main};
  }

`;

export default GlobalStyles;