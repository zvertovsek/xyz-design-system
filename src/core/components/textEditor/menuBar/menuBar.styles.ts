import Layout from "@core/components/layout";
import styled, { css } from "styled-components";

export const ContainerWrapper = styled(Layout.FlexboxContainer)`
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
  border: 1px solid ${({ theme }) => theme.colorPalettes.primary.default[200]};
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  align-items: center;
`;

export const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  border-radius: ${({ theme }) => theme.radii.sm};

  path {
    fill: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  }

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background-color: ${theme.colorPalettes.primary.default[300]};
      border: 1px solid ${theme.colorPalettes.primary.accent[800]};
    `}

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colorPalettes.secondary.color1[700]};
  }

  &:disabled {
    cursor: not-allowed;
    border: none;
    background-color: transparent;

    path {
      fill: ${({ theme }) => theme.colorPalettes.primary.default[400]};
    }
  }
`;
