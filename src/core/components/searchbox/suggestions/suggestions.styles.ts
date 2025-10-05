import Typography from "@core/components/typography";
import styled from "styled-components";

export const SuggestionsWrapper = styled.div`
  position: absolute;
  width: 100%;
  box-shadow: 0px 10px 20px ${({ theme }) => theme.colorPalettes.primary.accent[900]}26;
  background-color: ${({ theme }) => theme.colorPalettes.white};
  z-index: 1000;
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const GroupTitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[50]};
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

export const GroupItemsWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  overflow-x: hidden;
`;

export const SuggestionItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
  overflow: hidden;
  user-select: none;

  &:hover,
  &:focus,
  &.active {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const SuggestionItemName = styled(Typography.B1)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
`;

export const SuggestionItemCategory = styled(Typography.Caption)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[400]};
`;
