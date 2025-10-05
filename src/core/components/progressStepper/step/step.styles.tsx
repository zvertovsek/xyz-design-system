import styled, { css } from "styled-components";
import Typography from "@core/components/typography";
import { Theme } from "@theme";

const getStepColor = (isSelected: boolean, isCompleted: boolean, theme: Theme): string => {
  if (isSelected) {
    return theme.colorPalettes.primary.accent[800];
  }
  if (isCompleted) {
    return theme.colorPalettes.primary.accent[600];
  }
  return theme.colorPalettes.primary.default[400];
};

export const ProgressStepperWrapper = styled.button<{
  isSelected: boolean;
  isCompleted: boolean;
  theme: Theme;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[3]};

  &:disabled {
    cursor: default;
  }

  ${({ isSelected, isCompleted, theme }) => css`
    ${Label} {
      color: ${getStepColor(isSelected, isCompleted, theme)};
    }
    ${isCompleted &&
    css`
      &:hover {
        path {
          fill: ${theme.colorPalettes.primary.accent[800]};
        }
        ${Label} {
          text-decoration: underline;
          color: ${theme.colorPalettes.primary.accent[800]};
        }
      }
    `}
  `}
`;

export const Label = styled(Typography.H3)`
  white-space: nowrap;
`;

export const IncompletedIcon = styled.div<{ isSelected: boolean; theme: Theme }>`
  border-radius: 50%;
  width: ${({ theme }) => theme.sizes[7]};
  height: ${({ theme }) => theme.sizes[7]};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colorPalettes.primary.accent[100] : theme.colorPalettes.primary.default[300]};
`;
