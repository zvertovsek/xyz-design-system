import { createGlobalStyle, css } from "styled-components";

export const baseStyles = css`
  ${({ theme }) => `
  html {
    height: 100%;
  }

  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colorPalettes.black};
    margin: 0;
    padding: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior: none;
  background-color: #f6f6f9 !important;
  }

  div#root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colorPalettes.black};
  }

  svg {
    display: inline-block;
    // vertical-align: top;
  }

  button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  fieldset {
    min-width: 0;
    border: 0;
  }

  label {
    display: inline-block;
  }
`}
`;

export const GlobalStyle = createGlobalStyle`
  ${baseStyles}
`;
