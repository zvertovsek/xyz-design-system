import Layout from "@core/components/layout";
import Typography from "@core/components/typography";
import styled, { css } from "styled-components";
import { ColumnHeaderProps } from "./columnHeader.types";

export const ColumnWrapper = styled(Layout.FlexboxContainer)<{ hasGap: boolean; isSortable: boolean }>`
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  padding: ${({ theme }) => theme.spacing[4]} 0;
  margin: 0 ${({ hasGap, theme }) => hasGap && theme.spacing[1]};
  ${({ isSortable }) =>
    isSortable &&
    css`
      cursor: pointer;
    `}
  background-color: ${({ theme }) => theme.colorPalettes.white};
`;

export const NameColumn = styled(Typography.B1)<{ isHighlighted: boolean; isDefault: boolean }>`
  font-weight: ${({ isHighlighted, theme }) => isHighlighted && theme.fontWeights.semibold};
  color: ${({ isDefault, theme }) =>
    isDefault ? theme.colorPalettes.primary.default[400] : theme.colorPalettes.primary.accent[800]};
`;

export const IconArrowContainer = styled.div<{ direction: ColumnHeaderProps["sortDirection"]; isDefault: boolean }>`
  display: flex;
  transform: rotate(${({ direction }) => direction === "desc" && "180deg"});
  color: ${({ isDefault, theme }) =>
    isDefault ? theme.colorPalettes.primary.default[400] : theme.colorPalettes.primary.accent[800]};
`;
