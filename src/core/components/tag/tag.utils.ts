import { DefaultTheme } from "styled-components";
import { Severity } from "./tag.types";

export const getSeverities = (
  theme: DefaultTheme,
): {
  [key in Severity]: { backgroundColor: string; color?: string; hoverBackgroundColor: string };
} => ({
  [Severity.Default]: {
    backgroundColor: theme.colorPalettes.primary.default[100],
    hoverBackgroundColor: theme.colorPalettes.primary.default[200],
  },
  [Severity.Accent]: {
    backgroundColor: theme.colorPalettes.primary.accent[100],
    hoverBackgroundColor: theme.colorPalettes.primary.accent[200],
  },
  [Severity.Success]: {
    backgroundColor: theme.colorPalettes.rag.success[50],
    hoverBackgroundColor: "#99C7B9",
  },
  [Severity.Warning]: {
    backgroundColor: "#FFF990",
    hoverBackgroundColor: "#FAF13C",
  },
  [Severity.Danger]: {
    backgroundColor: "#FFB7A5",
    hoverBackgroundColor: "#FF8261",
  },
  [Severity.AI_Light]: {
    backgroundColor: theme.colorPalettes.primary.ai[100],
    hoverBackgroundColor: theme.colorPalettes.primary.ai[200],
  },
  [Severity.AI_Dark]: {
    color: theme.colorPalettes.primary.default[50],
    backgroundColor: theme.colorPalettes.primary.ai[500],
    hoverBackgroundColor: theme.colorPalettes.primary.ai[700],
  },
});
