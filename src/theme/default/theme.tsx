import isPropValid from "@emotion/is-prop-valid";
import system from "@system";
import React from "react";
import { DefaultTheme, StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyles";
import { ThemeProviderWrapperProps } from "../theme.types";
import colorPalettes from "./colorPalettes";
import components from "./components";
import fonts from "./fonts";

export const defaultTheme: DefaultTheme = {
  ...system,
  colorPalettes,
  fonts,
  components,
};

export const themeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => (
  <StyleSheetManager
    shouldForwardProp={(propName, elementToBeRendered) => {
      return typeof elementToBeRendered === "string" ? isPropValid(propName) : true;
    }}
  >
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </StyleSheetManager>
);
