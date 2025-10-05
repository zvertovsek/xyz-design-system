import styled, { css } from "styled-components";
import Typography from "../typography";

const styleFocusedLabel = css`
  top: ${({ theme }) => `-${theme.spacing["5"]}`};
  margin-top: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ContainerWrapper = styled.div<{ isValueEmpty: boolean }>`
  position: relative;

  ${({ isValueEmpty }) =>
    !isValueEmpty &&
    css`
      label {
        ${styleFocusedLabel}
      }
    `}

  &:focus-within label {
    ${styleFocusedLabel}
  }
`;

export const InputElement = styled.input<{
  isError: boolean;
}>`
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: ${({ theme, isError }) => (isError ? `1px solid ${theme.colorPalettes.rag.danger[600]}` : "none")};
  border-radius: ${({ theme }) => theme.radii.sm};
  height: ${({ theme }) => theme.sizes[9]};
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing["2"]};
  padding-right: ${({ theme }) => theme.spacing["2"]};

  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  }
`;

export const Label = styled.label<{
  isError: boolean;
}>`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  position: absolute;
  left: ${({ theme }) => theme.spacing["2"]};
  top: ${({ isError }) => (isError ? "30%" : "50%")};
  margin-top: -${({ theme }) => theme.spacing[2]};
  transition: 0.2s;
  pointer-events: none;
`;

export const ErrorMessageWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing["2"]} 0;
`;

export const ErrorMessage = styled(Typography.Caption)`
  color: ${({ theme }) => theme.colorPalettes.rag.danger[600]};
`;
