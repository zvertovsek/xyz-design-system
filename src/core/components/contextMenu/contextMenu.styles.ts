import { ellipsis } from "@utils";
import styled, { css } from "styled-components";
import Typography from "@core/components/typography";

export const MenuWrapper = styled.ul<{
  isVisible: boolean;
  baseZIndex: number;
  width: number;
  topPosition?: number;
  horizontalPosition?: number;
  isPositionedLeft?: boolean;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: ${({ topPosition }) => topPosition && `${topPosition}px`};
  padding: ${({ theme }) => theme.spacing[1]} 0;
  width: ${({ width }) => `${width}px`};
  background-color: ${({ theme }) => theme.colorPalettes.white};
  box-shadow: 0px 16px 32px rgba(42, 60, 60, 0.2);
  border-radius: ${({ theme }) => `0 0 ${theme.radii.sm} ${theme.radii.sm}`};
  z-index: ${({ baseZIndex }) => baseZIndex};
  visibility: ${({ isVisible }) => !isVisible && "hidden"};
  transform: scale(${({ isVisible }) => !isVisible && "0.1"});
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};

  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: opacity, transform, visibility;

  ${({ isPositionedLeft, horizontalPosition }) =>
    isPositionedLeft
      ? css`
          left: ${horizontalPosition && `${horizontalPosition}px`};
          transform-origin: top left;
        `
      : css`
          right: ${horizontalPosition && `${horizontalPosition}px`};
          transform-origin: top right;
        `}
`;

export const ItemWrapper = styled.li`
  list-style: none;
`;

export const ItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  user-select: none;
  width: 100%;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
    outline: none;
  }
`;

export const Text = styled(Typography.B1)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  ${ellipsis}
`;
