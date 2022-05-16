import { createGlobalStyle, css } from 'styled-components';
import { variables } from './styles';

// + export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  /* Same as before */
  color: ${variables.colors.gray};
  background-color: ${variables.colors.gray['200']};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }`;
