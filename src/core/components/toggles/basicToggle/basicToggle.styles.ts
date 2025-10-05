import styled, { DefaultTheme } from "styled-components";
import { ColorVariant, BasicToggleSize } from "../toggle.types";

const getButtonSize = ({ theme, size }: { theme: DefaultTheme; size: BasicToggleSize }): string => {
  switch (size) {
    case BasicToggleSize.xs:
      return theme.sizes[5];
    case BasicToggleSize.sm:
      return theme.sizes[6];
    case BasicToggleSize.md:
      return theme.sizes[7];
    case BasicToggleSize.lg:
      return theme.sizes[8];
    default:
      return theme.sizes[6];
  }
};

const getFontSize = ({ theme, size }: { theme: DefaultTheme; size: BasicToggleSize }): string => {
  switch (size) {
    case BasicToggleSize.sm:
      return theme.fontSizes["xs"];
    case BasicToggleSize.md:
      return theme.fontSizes["sm"];
    case BasicToggleSize.lg:
      return theme.fontSizes["md"];
    default:
      return theme.fontSizes["sm"];
  }
};

export const BasicToggleWrapper = styled.div`
  display: flex;
`;

export const BasicToggleInput = styled.input`
  opacity: 0;
  width: 0;
`;

export const BasicToggleLabel = styled.label<{
  colorVariant: ColorVariant;
  isIconButton?: boolean;
  size: BasicToggleSize;
}>`
  display: flex;
  color: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  font-size: ${getFontSize};
  height: ${getButtonSize};
  line-height: ${getButtonSize};
  width: ${({ isIconButton, theme, size }) => (isIconButton ? getButtonSize({ theme, size }) : "auto")};
  padding-left: ${({ isIconButton, theme }) => (isIconButton ? "inherit" : theme.sizes[2])};
  padding-right: ${({ isIconButton, theme }) => (isIconButton ? "inherit" : theme.sizes[2])};
  border-radius: ${({ theme }) => theme.radii["sm"]};
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${({ colorVariant, theme }) => {
    switch (colorVariant) {
      case ColorVariant.grey:
        return theme.colorPalettes.primary.default[100];
      case ColorVariant.white:
        return theme.colorPalettes.white;
      default:
        return theme.colorPalettes.primary.default[100];
    }
  }};
  svg {
    height: ${({ theme, size }) => {
      switch (size) {
        case BasicToggleSize.xs:
          return theme.sizes[3];
        case BasicToggleSize.sm:
          return theme.sizes["3.5"];
        case BasicToggleSize.md:
          return theme.sizes[4];
        case BasicToggleSize.lg:
          return theme.sizes[5];
        default:
          return theme.sizes[3];
      }
    }};
    width: unset;
    path {
      fill: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
    }
  }
  ${BasicToggleInput}:checked + & {
    box-shadow: ${({ theme }) => theme.shadows["button"]};
    border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.black};
  }
  ${BasicToggleInput}:disabled + & {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
    cursor: not-allowed;
    svg {
      path {
        fill: ${({ theme }) => theme.colorPalettes.primary.default[400]};
      }
    }
  }
  ${BasicToggleInput}:hover:not(:disabled) + & {
    box-shadow: ${({ theme }) => theme.shadows["button"]};
  }
  ${BasicToggleInput}:focus:not(:disabled) + & {
    border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.secondary.color1[700]};
  }
`;
