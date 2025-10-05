import { RIGHT_DRAWER_WIDTH } from "@utils";
import styled, { css } from "styled-components";
import { DrawerWrapper, Toggler } from "../drawer.styles";

export const RightSideDrawer = styled(DrawerWrapper)<{
  isOpen: boolean;
  isResizable: boolean;
  maxWidth?: string;
}>`
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[50]};
  right: 0;
  width: ${({ isOpen }) => (isOpen ? RIGHT_DRAWER_WIDTH : "0 !important")};
  ${({ isResizable, maxWidth }) => isResizable && maxWidth && `max-width: ${maxWidth}`};

  ${({ isResizable }) =>
    isResizable &&
    css`
      resize: horizontal;
      overflow: auto;
      direction: rtl;
      display: flex;
      flex-shrink: 0;

      & > * {
        direction: ltr;
      }
    `}
`;

export const Button = styled(Toggler)<{ isOpen: boolean; rightPosition: number }>`
  display: block;
  position: fixed;
  right: ${({ rightPosition }) => rightPosition}px;

  &::before {
    transform: skew(0, -15deg);
    border-radius: 8px 0;
  }

  &::after {
    transform: skew(0, 15deg);
    border-radius: 0 8px;
  }

  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? "90deg" : "-90deg")});
  }
`;

export const ContentWrapper = styled.div<{ isHidden: boolean }>`
  position: initial;
  opacity: 1;
  transition: all 0.5s linear;
  width: 100%;
  min-width: ${RIGHT_DRAWER_WIDTH};
  height: 100%;
  overflow-x: hidden;

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;
