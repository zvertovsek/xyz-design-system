import styled, { css } from "styled-components";
import { Tile } from "../../layout/tile/tile.styles";

export const BaseCardWrapper = styled(Tile)<{ color: string; isSelected: boolean; isClickable: boolean }>`
  background-color: ${({ color }) => color};

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
      &:hover {
        box-shadow: 3px 3px ${({ theme }) => theme.colorPalettes.black};
      }
    `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      box-shadow: 3px 3px ${({ theme }) => theme.colorPalettes.black};
      border-top: 1.9px solid ${({ theme }) => theme.colorPalettes.primary.accent[900]};
      border-left: 1.9px solid ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    `}
`;
