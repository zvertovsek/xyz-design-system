import { ellipsis } from "@utils";
import styled, { DefaultTheme } from "styled-components";
import Typography from "../typography";
import { DropdownProps, IndicatorProps } from "./select.types";

export const MAX_HEIGHT_DROPDOWN = 300;

const getBackgroundColorDropdown = (theme: DefaultTheme, color: "white" | "grey"): string => {
  switch (color) {
    case "white":
      return theme.colorPalettes.white;
    case "grey":
    default:
      return theme.colorPalettes.primary.default[100];
  }
};

export const Container = styled.div`
  position: relative;
`;

export const Display = styled.button<{ color: "white" | "grey" }>`
  width: ${({ theme }) => theme.sizes.full};
  display: inline-block;
  text-align: left;
  padding: ${({ theme }) => theme.spacing["1"]} ${({ theme }) => theme.spacing["2"]};
  padding-right: ${({ theme }) => theme.spacing["10"]};
  background-color: ${({ theme, color }) => getBackgroundColorDropdown(theme, color)};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 1px 0px 0px ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  }

  &:focus-visible,
  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colorPalettes.secondary.color1[700]};
  }

  &.selected {
    background-color: ${({ theme, color }) => getBackgroundColorDropdown(theme, color)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[50]};
    color: ${({ theme }) => theme.colorPalettes.primary.accent[500]};
    border-color: transparent;
    pointer-events: none;
  }
`;

export const Indicator = styled.span<IndicatorProps>`
  display: flex;
  position: absolute;
  right: ${({ theme }) => theme.spacing["2"]};
  top: ${({ theme }) => theme.spacing["2"]};
  ${({ isDropdownOpened }) => !isDropdownOpened && "transform: rotate(180deg);"};
`;

export const Dropdown = styled.div<DropdownProps>`
  position: absolute;
  background-color: ${({ theme, color }) => getBackgroundColorDropdown(theme, color)};
  border-radius: 0 0 4px 4px;
  ${({ isOnTop }) => (isOnTop ? "bottom: 100%" : "top: 100%")};
  left: 0;
  z-index: ${({ isDropdownOpened }) => (isDropdownOpened ? 99 : -1)};
  width: ${({ width }) => width}px;
  max-height: ${MAX_HEIGHT_DROPDOWN}px;
  opacity: ${({ isDropdownOpened }) => (isDropdownOpened ? 1 : 0)};
  visibility: ${({ isDropdownOpened }) => (isDropdownOpened ? "visible" : "hidden")};
  overflow-y: auto;
  overflow-x: hidden;
  transition:
    height 0.1s ease-out,
    opacity 0.1s ease-out,
    visibility 0.1s ease-out;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const Option = styled.button`
  display: block;
  width: ${({ theme }) => theme.sizes.full};
  font-size: ${({ theme }) => theme.fontSizes["xs"]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  text-align: left;
  padding: ${({ theme }) => theme.spacing["1"]} ${({ theme }) => theme.spacing["2"]};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  border: 1px solid transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
    color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  }

  &.selected {
    color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[50]};
    color: ${({ theme }) => theme.colorPalettes.primary.accent[500]};
    border-color: transparent;
    pointer-events: none;
  }
`;

export const SelectLabel = styled(Typography.B2)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  ${ellipsis};
`;
