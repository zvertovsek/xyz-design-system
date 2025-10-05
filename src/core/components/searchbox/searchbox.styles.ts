import styled from "styled-components";
import Typography from "../typography";

export const SearchboxWrapper = styled.div<{ width?: string; hasShadow: boolean; isDisabled: boolean }>`
  position: relative;
  width: ${({ width }) => width};
  box-shadow: ${({ hasShadow, theme }) => hasShadow && `0px -5px 20px ${theme.colorPalettes.primary.accent[900]}26`};
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colorPalettes.primary.default[200] : theme.colorPalettes.white};
`;

export const SearchboxForm = styled.form`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const SearchBarInputWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  flex-grow: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const SelectedSuggestionItemsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  white-space: nowrap;
`;

export const Searchbar = styled.input`
  height: ${({ theme }) => theme.sizes[9]};
  min-width: ${({ theme }) => theme.sizes[80]};
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorPalettes.primary.default[700]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:disabled {
    &::placeholder {
      color: ${({ theme }) => theme.colorPalettes.primary.default[400]};
    }
  }
`;

export const MainButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
  padding: ${({ theme }) => theme.spacing[1.5]};
  border-radius: ${({ theme }) => theme.radii.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
  }
`;

export const HintText = styled(Typography.Caption)`
  color: ${({ theme }) => theme.colorPalettes.primary.default[500]};
  white-space: nowrap;
`;
