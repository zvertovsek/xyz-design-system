import styled from "styled-components";
import { Searchbar, SearchBarInputWrapper, SearchboxForm, SearchboxWrapper } from "../searchbox/searchbox.styles";

export const SearchInputWrapper = styled(SearchboxWrapper)<{ hasFocus: boolean }>`
  height: 36px;
  background: ${({ theme }) => theme.colorPalettes.white};
  border: ${({ hasFocus, theme }) =>
    hasFocus
      ? `${theme.borders["1px"]} ${theme.colorPalettes.primary.accent[800]}`
      : `${theme.borders["1px"]} transparent`};
`;

export const SearchInputForm = styled(SearchboxForm)`
  height: 100%;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const SearchInputBarWrapper = styled(SearchBarInputWrapper)`
  overflow: hidden;
`;

export const SearchInputBar = styled(Searchbar)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  height: 100%;
  background: ${({ theme }) => theme.colorPalettes.white};

  &:focus-visible {
    outline: none;
  }
`;
