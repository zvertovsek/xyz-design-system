import { DRAWER_CLOSED_WIDTH, DRAWER_OPEN_WIDTH } from "@utils";
import styled from "styled-components";
import { DrawerWrapper, Toggler } from "../drawer.styles";

export const LeftSideDrawer = styled(DrawerWrapper)<{
  isOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colorPalettes.white};
  width: ${({ isOpen }) => (isOpen ? DRAWER_OPEN_WIDTH : DRAWER_CLOSED_WIDTH)};
`;

export const Button = styled(Toggler)<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  left: 100%;

  &::before {
    transform: skew(0, 15deg);
    border-radius: 0 8px;
  }

  &::after {
    transform: skew(0, -15deg);
    border-radius: 8px 0;
  }

  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? "-90deg" : "90deg")});
  }
`;
