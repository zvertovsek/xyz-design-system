import Typography from "@core/components/typography";
import { DRAWER_OPEN_WIDTH } from "@utils";
import styled, { css } from "styled-components";
import { ItemListWrapper } from "../verticalMenuGroup/verticalMenuGroup.styles";

export const LabelItem = styled(Typography.B1)<{ color: string }>`
  color: ${({ color }) => color};
`;

export const ItemWrapper = styled.li<{ isSelectable: boolean; isSelected: boolean; isDisabled: boolean }>`
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: ${({ isSelectable }) => isSelectable && "pointer"};

  &:hover {
    background-color: ${({ isSelectable, theme }) => isSelectable && theme.colorPalettes.primary.default[200]};
    ${LabelItem} {
      color: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
    }
    path {
      fill: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
    }
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colorPalettes.primary.accent[600]} !important;
      ${LabelItem} {
        color: ${({ theme }) => theme.colorPalettes.white} !important;
        font-weight: ${({ theme }) => theme.fontWeights.medium};
      }
      path {
        fill: ${({ theme }) => theme.colorPalettes.white} !important;
      }
    `}
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes["6"]};
  padding: ${({ theme }) => theme.sizes["3"]};
  width: calc(${DRAWER_OPEN_WIDTH} - ${({ theme }) => theme.sizes[3]});
  text-decoration: none;
`;

export const ArrowButton = styled.button<{ direction: "up" | "down" }>`
  display: flex;
  cursor: pointer;
  transform: rotate(${({ direction }) => direction === "down" && "180deg"});
  :hover {
    opacity: 0.5;
  }
`;

export const ItemChildrenWrapper = styled(ItemListWrapper)<{ isHidden: boolean }>`
  margin-bottom: 0;
  padding-left: ${({ theme }) => theme.sizes["13"]};
  display: ${({ isHidden }) => isHidden && "none"};

  a {
    width: initial;
  }
`;

export const ExtendedPartWrapper = styled.div<{ isHidden: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  position: initial;
  opacity: 1;
  transition: all 0.5s linear;

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;
