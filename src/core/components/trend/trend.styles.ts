import styled, { css, DefaultTheme } from "styled-components";
import Typography from "../typography";
import { Severity } from "./trend.types";

const getColorBySeverity = (severity: Severity, theme: DefaultTheme): string => {
  switch (severity) {
    case "positive":
      return theme.colorPalettes.rag.success[200];
    case "flat":
      return theme.colorPalettes.primary.default[500];
    case "negative":
      return theme.colorPalettes.rag.danger[600];
    case "ai":
      return theme.colorPalettes.primary.ai[700];
    default:
      return theme.colorPalettes.primary.accent[700]; //orca for no change in data
  }
};

export const TrendLabel = styled(Typography.B2)<{ isClickable?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  ${({ isClickable }) =>
    isClickable &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}
`;

export const TrendWrapper = styled.div<{ color: Severity }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  path {
    fill: ${({ color, theme }) => getColorBySeverity(color, theme)};
  }
  ${TrendLabel} {
    color: ${({ color, theme }) => getColorBySeverity(color, theme)};
  }
`;
