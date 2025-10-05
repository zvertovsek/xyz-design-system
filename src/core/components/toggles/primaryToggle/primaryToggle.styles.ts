import styled from "styled-components";
import { SelectionType } from "../toggle.types";

export const PrimaryToggleWrapper = styled.div`
  display: flex;
`;

export const PrimaryToggleInput = styled.input`
  opacity: 0;
  width: 0;
`;

export const PrimaryToggleLabel = styled.label<{ selectionType: SelectionType }>`
  color: ${({ theme }) => theme.colorPalettes.primary.default[500]};
  border-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
  position: relative;
  display: flex;
  white-space: nowrap;
  align-items: center;
  background-image: none;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  height: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  ${PrimaryToggleInput}:checked + & {
    color: ${({ theme }) => theme.colorPalettes.white};
    border-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    background-color: ${({ theme, selectionType }) =>
      selectionType === SelectionType.Ai
        ? theme.colorPalettes.primary.ai[500]
        : theme.colorPalettes.primary.accent[600]};
    border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    &:hover {
      color: ${({ theme }) => theme.colorPalettes.white};
      box-shadow: ${({ theme }) => theme.shadows["button"]};
      background-color: ${({ theme, selectionType }) =>
        selectionType === SelectionType.Ai
          ? theme.colorPalettes.primary.ai[700]
          : theme.colorPalettes.primary.accent[800]};
      border-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    }
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows["button"]};
    color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  }
  ${PrimaryToggleInput}:checked:focus + &,
  ${PrimaryToggleInput}:focus + & {
    border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.secondary.color1[700]};
  }
  ${PrimaryToggleInput}:disabled + & {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
    color: ${({ theme }) => theme.colorPalettes.primary.default[400]};
    border-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
    cursor: not-allowed;
    box-shadow: none;
  }
`;
