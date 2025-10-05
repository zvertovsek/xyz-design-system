import { ButtonVariant } from "@core/components/button/button.types";
import { ThemedComponents } from "@theme";
import colorPalettes from "./colorPalettes";

const components: ThemedComponents = {
  typography: {
    color: colorPalettes.primary.accent[900],
  },
  button: {
    variants: {
      [ButtonVariant.CommonLight]: {
        color: colorPalettes.primary.accent[800],
        borderColor: colorPalettes.white,
        backgroundColor: colorPalettes.white,
        _disabled: {
          color: colorPalettes.primary.default[400],
          borderColor: colorPalettes.primary.default[300],
          backgroundColor: colorPalettes.primary.default[300],
        },
      },
      [ButtonVariant.CommonDark]: {
        color: colorPalettes.primary.accent[800],
        borderColor: colorPalettes.primary.default[100],
        backgroundColor: colorPalettes.primary.default[100],
        _disabled: {
          color: colorPalettes.primary.default[400],
          borderColor: colorPalettes.primary.default[300],
          backgroundColor: colorPalettes.primary.default[300],
        },
      },
      [ButtonVariant.Primary]: {
        color: colorPalettes.white,
        borderColor: colorPalettes.primary.accent[600],
        backgroundColor: colorPalettes.primary.accent[600],
        _hover: {
          borderColor: colorPalettes.primary.accent[800],
          backgroundColor: colorPalettes.primary.accent[800],
        },
        _disabled: {
          color: colorPalettes.primary.default[400],
          borderColor: colorPalettes.primary.default[300],
          backgroundColor: colorPalettes.primary.default[300],
        },
      },
      [ButtonVariant.PrimaryAI]: {
        color: colorPalettes.white,
        borderColor: colorPalettes.primary.ai[500],
        backgroundColor: colorPalettes.primary.ai[500],
        _hover: {
          borderColor: colorPalettes.primary.ai[700],
          backgroundColor: colorPalettes.primary.ai[700],
        },
        _disabled: {
          color: colorPalettes.primary.default[400],
          borderColor: colorPalettes.primary.default[300],
          backgroundColor: colorPalettes.primary.default[300],
        },
      },
      [ButtonVariant.Secondary]: {
        color: colorPalettes.primary.accent[600],
        borderColor: colorPalettes.primary.accent[600],
        backgroundColor: colorPalettes.white,
        _hover: {
          color: colorPalettes.primary.accent[800],
          borderColor: colorPalettes.primary.accent[800],
        },
        _disabled: {
          color: colorPalettes.primary.default[400],
          borderColor: colorPalettes.primary.default[400],
          backgroundColor: colorPalettes.primary.default[300],
        },
      },
      [ButtonVariant.TextOnly]: {
        color: colorPalettes.primary.accent[700],
        borderColor: "transparent",
        backgroundColor: "transparent",
        _hover: {
          color: colorPalettes.primary.accent[900],
          boxShadow: "none",
        },
        _disabled: {
          color: colorPalettes.primary.default[400],
        },
      },
      [ButtonVariant.TextOnlyAI]: {
        color: colorPalettes.primary.ai[500],
        borderColor: "transparent",
        backgroundColor: "transparent",
        _hover: {
          color: colorPalettes.primary.ai[700],
          boxShadow: "none",
        },
        _disabled: {
          color: colorPalettes.primary.default[400],
        },
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
};

export default components;
