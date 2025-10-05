import isPropValid from "@emotion/is-prop-valid";
import { Preview } from "@storybook/react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/theme";
import { defaultTheme } from "../src/theme/default";

const withThemeProvider = (Story) => {
  return (
    <StyleSheetManager
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string" ? isPropValid(propName) : true;
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </StyleSheetManager>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    options: {
      storySort: (a, b) => globalThis.deeperSort(a, b),
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
