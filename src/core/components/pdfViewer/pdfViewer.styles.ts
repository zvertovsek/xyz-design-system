import { styled } from "styled-components";
import { TextButton } from "../button";

export const ViewerWrapper = styled.div<{ currentSearchTextColor?: string }>`
  position: relative;
  width: 100%;
  height: 100%;

  & .rpv-search__highlight--current {
    background-color: ${({ theme, currentSearchTextColor }) =>
      currentSearchTextColor || `${theme.colorPalettes.secondary.color1[300]}80`} !important;
  }
`;

export const PopoverWrapper = styled.div<{ left: number; top: number; height: number }>`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${({ left }) => left}%;
  top: ${({ top, height }) => top + height}%;
  transform: translate(0, 8px);
  z-index: ${({ theme }) => theme.zIndices.popover};
  min-width: ${({ theme }) => theme.sizes[24]};
  padding: ${({ theme }) => `${theme.spacing[1.5]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.radii["3xl"]};
  color: ${({ theme }) => theme.colorPalettes.white};
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};

  button {
    background-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    border-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    color: ${({ theme }) => theme.colorPalettes.white};

    &:hover {
      color: ${({ theme }) => theme.colorPalettes.white};
    }

    svg {
      path {
        fill: ${({ theme }) => theme.colorPalettes.white};
      }
    }
  }
`;

export const PopoverButton = styled(TextButton)``;
