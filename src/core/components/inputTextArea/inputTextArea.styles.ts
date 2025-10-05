import { Theme } from "@theme";
import { deviceSize, deviceSizeTypes } from "@utils";
import styled from "styled-components";
import Typography from "../typography";
import { Severity } from "./inputTextArea.types";

export const ContainerWrapper = styled.div<{ isValueEmpty: boolean }>`
  position: relative;
  display: inline-block;
`;

const getBackgroundColorBySeverity = (severity: Severity, theme: Theme) => {
  switch (severity) {
    case Severity.Light:
      return theme.colorPalettes.white;
    case Severity.Dark:
    default:
      return theme.colorPalettes.primary.default[100];
  }
};

export const InputElementTextArea = styled.textarea<{
  isResizable?: boolean;
  isRequired?: boolean;
  isFilled?: boolean;
  isInvalid: boolean;
  severity: Severity;
}>`
  border: 1px solid
    ${({ isInvalid, severity, theme }) =>
      isInvalid ? theme.colorPalettes.rag.danger[600] : getBackgroundColorBySeverity(severity, theme)};
  background-color: ${({ severity, theme }) => getBackgroundColorBySeverity(severity, theme)};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  border-radius: ${({ theme }) => theme.radii.sm};
  width: 285px;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media ${deviceSize.getMediaQuerySize(deviceSizeTypes.Range.Max, "285px")} {
    width: 100%;
  }
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing["1.5"]};
  word-wrap: break-word;
  &:focus-visible {
    outline: none;
  }
  resize: ${({ isResizable }) => (isResizable ? "both" : "none")};
  &::placeholder {
    color: ${({ theme }) => theme.colorPalettes.primary.default[500]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
    pointer-events: none;
    &::placeholder {
      color: ${({ theme }) => theme.colorPalettes.primary.default[400]};
    }
  }
  &:hover {
    box-shadow: 1px 1px 0px ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    border-radius: ${({ theme }) => theme.radii.sm};
  }
  &:focus {
    border: 1px solid
      ${({ isInvalid, theme }) =>
        isInvalid ? theme.colorPalettes.rag.danger[600] : theme.colorPalettes.secondary.color1[700]};
  }
  &:invalid {
    border: 1px solid ${({ theme }) => theme.colorPalettes.rag.danger[600]};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[600]};
`;

export const CharacterLimitLabel = styled(Typography.Caption)<{ isInvalid: boolean }>`
  color: ${({ isInvalid, theme }) =>
    isInvalid ? theme.colorPalettes.rag.danger[600] : theme.colorPalettes.primary.default[400]};
  position: absolute;
  right: 0;
  top: 6px;
`;

export const ErrorLabel = styled(Typography.Caption)`
  color: ${({ theme }) => theme.colorPalettes.rag.danger[600]};
`;
