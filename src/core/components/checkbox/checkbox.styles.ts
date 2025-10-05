import styled, { css } from "styled-components";
import Typography from "../typography";

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1.5]};
`;

const CheckboxChecked = css`
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[600]};

  &::before {
    content: "";
    position: absolute;
  }
`;

export const CheckboxInput = styled.input<{ hasChildrenChecked?: boolean }>`
  appearance: none;
  position: relative;
  width: 12px;
  height: 12px;
  border: 1px solid ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colorPalettes.primary.accent[200]};
  }

  ${({ hasChildrenChecked }) =>
    hasChildrenChecked
      ? css`
          ${CheckboxChecked}

          &::before {
            left: 3px;
            width: 4px;
            height: 6px;
            border-bottom: solid ${({ theme }) => theme.colorPalettes.primary.accent[50]};
            border-width: 0 1px 1px 0;
          }
        `
      : css`
          &:checked {
            ${CheckboxChecked}

            &::before {
              top: 1.5px;
              left: 3.5px;
              transform: rotate(45deg);
              width: 3px;
              height: 6px;
              border: solid ${({ theme }) => theme.colorPalettes.primary.accent[50]};
              border-width: 0 1px 1px 0;
            }
          }
        `}

  &:disabled {
    cursor: default;
    border-color: ${({ theme }) => theme.colorPalettes.primary.default[400]};
    background-color: ${({ hasChildrenChecked, theme }) =>
      hasChildrenChecked && theme.colorPalettes.primary.default[200]};

    :checked {
      background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
    }

    &::before {
      border-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
    }
  }
`;

export const CheckboxLabel = styled(Typography.B2)<{ isDisabled?: boolean }>`
  cursor: ${({ isDisabled }) => !isDisabled && "pointer"};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
`;
