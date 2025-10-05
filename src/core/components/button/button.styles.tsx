import { LineHeights } from "@system/lineHeights";
import { Sizes } from "@system/sizes";
import styled, { css } from "styled-components";
import { CommonButtonElementProps, CommonButtonSize } from "./button.types";

const mapButtonSizeAttrToLineHeight = (size: CommonButtonSize | undefined): keyof LineHeights => {
  switch (size) {
    case CommonButtonSize.xs:
      return "verytight";
    case CommonButtonSize.sm:
      return "snug";
    case CommonButtonSize.md:
      return "normal";
    case CommonButtonSize.lg:
    default:
      return "relaxed";
  }
};

const mapButtonSizeAttrToSize = (size: CommonButtonSize | undefined): keyof Sizes => {
  switch (size) {
    case CommonButtonSize.xs:
      return "5";
    case CommonButtonSize.sm:
      return "6";
    case CommonButtonSize.md:
      return "7";
    case CommonButtonSize.lg:
    default:
      return "8";
  }
};

const setVariantRelatedStyles = ({ variant }: CommonButtonElementProps) => css`
  ${({ theme }) => {
    const themeVariant = theme.components.button.variants[variant];
    return css`
      color: ${themeVariant.color};
      background-color: ${themeVariant.backgroundColor};
      border-color: ${themeVariant.borderColor};
    
      svg {
        path {
          fill: ${themeVariant.color};
        }
      }
    
      &:hover {
        color: ${themeVariant._hover?.color || themeVariant.color};
        background-color: ${themeVariant._hover?.backgroundColor || themeVariant.backgroundColor};
        border-color: ${themeVariant._hover?.borderColor || themeVariant.borderColor};
        box-shadow: ${themeVariant._hover?.boxShadow || theme.shadows["button"]};
    
        svg {
          path {
            fill: ${themeVariant._hover?.color || themeVariant.color};
          }
        }
      }
    
      &[disabled] {
        color: ${themeVariant._disabled?.color || themeVariant.color};
        background-color: ${themeVariant._disabled?.backgroundColor || themeVariant.backgroundColor};
        border-color: ${themeVariant._disabled?.borderColor || themeVariant.borderColor};
        box-shadow: ${themeVariant._disabled?.boxShadow || "none"};
    
        svg {
          path {
            fill: ${themeVariant._disabled?.color || themeVariant.color};
          }
        }
    `;
  }}
`;

export const ButtonElement = styled.button<CommonButtonElementProps>`
  position: relative;
  display: flex;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme, makeTextBold }) => makeTextBold && theme.fontWeights.extrabold};
  text-align: center;
  background-image: none;
  border-style: solid;
  border-width: 1px;
  border-radius: ${({ theme }) => theme.radii["sm"]};
  cursor: pointer;
  text-transform: ${({ makeTextUppercase }) => makeTextUppercase && "uppercase"};
  height: ${({ theme, size }) => theme.sizes[mapButtonSizeAttrToSize(size)]};
  line-height: ${({ theme, size }) => theme.lineHeights[mapButtonSizeAttrToLineHeight(size)]};
  padding: 0 ${({ hasLabel }) => (hasLabel ? 7 : 3)}px;
  gap: 8px;

  svg {
    margin: 3px 0;
  }

  &:active,
  &:focus {
    outline: 0;
  }

  &[disabled] {
    cursor: not-allowed;
    > * {
      pointer-events: none;
    }
  }

  &:focus-visible:not(:disabled) {
    border-color: ${({ theme }) => theme.colorPalettes.secondary.color1[700]} !important;
  }

  ${(props) => setVariantRelatedStyles(props)}
`;
