import Layout from "@core/components/layout";
import Typography from "@core/components/typography";
import styled, { css } from "styled-components";

export const NameColumn = styled(Typography.B1)<{ color: string }>`
  color: ${({ color }) => color};
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

export const CellWrapper = styled(Layout.FlexboxContainer)<{
  hasGap: boolean;
  backgroundColor: string;
  isClickable: boolean;
  justifyContent: "flex-start" | "center" | "flex-end";
  isHighlightable: boolean;
  width?: string;
  borderRadius?: string;
}>`
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 0 ${({ hasGap, theme }) => hasGap && theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[5]} 0;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};

  ${({ isClickable }) => css`
    cursor: ${isClickable ? "pointer" : "default"};
  `}
  &:hover {
    ${NameColumn} {
      text-decoration: underline;
    }
  }
`;
