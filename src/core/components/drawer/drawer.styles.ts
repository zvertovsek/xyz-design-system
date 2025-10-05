import styled from "styled-components";

export const DrawerWrapper = styled.div<{
  baseZIndex: number;
}>`
  transition: all 0.1s;
  position: fixed;
  z-index: ${({ baseZIndex }) => baseZIndex};
  height: 100vh;
  top: 0;
  font-family: Poppins;
`;

export const Toggler = styled.button<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  top: calc(50% - 15px);

  &,
  &::before,
  &::after {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
    position: absolute;
    width: 20px;
    height: 30px;
  }

  &::before {
    content: " ";
    display: block;
    top: -10px;
    z-index: -1;
  }

  &::after {
    content: " ";
    display: block;
    bottom: -10px;
    z-index: -1;
  }

  path {
    fill: ${({ theme }) => theme.colorPalettes.primary.accent[600]};
  }

  &:hover {
    &,
    &::before,
    &:after {
      background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
    }

    path {
      fill: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
    }
  }
`;
