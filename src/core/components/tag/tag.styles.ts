import styled, { css } from "styled-components";
import Typography from "../typography";
import { Severity } from "./tag.types";
import { getSeverities } from "./tag.utils";

export const TagElement = styled.div<{
  isClickable: boolean;
  isDisabled: boolean;
  isTagRemovable?: boolean;
  isBold?: boolean;
  width?: string;
  severity: Severity;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radii.xs};
  height: ${({ theme }) => theme.sizes[6]};
  width: fit-content;
  letter-spacing: 0.1px;
  white-space: pre;
  user-select: none;
  min-width: ${({ width }) => width};

  ${Typography.B2} {
    font-weight: ${({ isBold, theme }) => (isBold ? theme.fontWeights.bold : theme.fontWeights.light)};
  }

  ${({ severity, theme }) =>
    css`
      background-color: ${getSeverities(theme)[severity].backgroundColor};
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
      pointer-events: none;
    `}

  ${({ isClickable, severity, theme }) =>
    !!isClickable &&
    css`
      cursor: pointer;

      &:hover {
        box-shadow: 1px 1px 0px ${({ theme }) => theme.colorPalettes.primary.accent[900]};
        background-color: ${getSeverities(theme)[severity].hoverBackgroundColor};
      }

      &.selected {
        border: 1px solid ${({ theme }) => theme.colorPalettes.primary.accent[900]};
      }

      &:focus-visible {
        border: 1px solid ${({ theme }) => theme.colorPalettes.secondary.color1[700]};
        outline: none;
      }
    `}

    ${({ isTagRemovable, theme }) =>
    isTagRemovable &&
    css`
      padding-right: ${theme.spacing[1]};
    `}
`;

export const CancelButton = styled.button`
  display: flex;
  position: absolute;
  top: 7.5px;
  right: 4px;

  &:disabled {
    pointer-events: none;
  }
`;
