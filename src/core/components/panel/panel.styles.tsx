import styled, { css } from "styled-components";
import { IconButton } from "../button";
import { Tile } from "../layout/tile/tile.styles";

export const PanelWrapper = styled(Tile)<{ color?: string }>`
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme, color }) => (color ? color : theme.colorPalettes.white)};
`;

export const HeaderWrapper = styled.div<{ isClickable: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing["3"]};

  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;

export const HeaderContent = styled.div`
  flex-grow: 1;
`;

export const ToggleButton = styled(IconButton)<{ isExpanded: boolean }>`
  align-self: flex-start;
  flex-shrink: 0;
  margin-top: 2px;
  svg {
    transition: all 0.1s ease-in-out;
    ${({ isExpanded }) => !isExpanded && "transform: rotate(-180deg)"};

    path {
      fill: #2e3651;
    }
  }
`;

export const ContentWrapper = styled.div<{ isExpanded: boolean }>`
  max-height: 0;
  visibility: hidden;
  ${({ isExpanded }) =>
    isExpanded &&
    css`
      max-height: none;
      padding: ${({ theme }) => theme.spacing[3]};
      visibility: visible;
    `}
`;
