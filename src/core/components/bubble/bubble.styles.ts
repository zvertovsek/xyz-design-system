import styled, { css } from "styled-components";
import { IconButton } from "../button";
import { BubbleProps } from "./bubble.types";

export const BubbleContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
`;

export const BubbleTime = styled.span`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[600]};
`;

export const BubbleDisplayName = styled.span`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  margin-left: 6px;
`;

export const BubbleHeader = styled.header`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  ${BubbleTime}, ${BubbleDisplayName} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: ${({ theme }) => theme.lineHeights.verytight};
  }
`;

export const BubblePlayButton = styled(IconButton)`
  border-radius: ${({ theme }) => theme.radii.full};
  width: ${({ theme }) => theme.spacing[3]};
  height: ${({ theme }) => theme.spacing[3]};
  margin-right: ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[600]};
  padding-left: ${({ theme }) => theme.spacing["px"]};
  &:hover:not(:disabled) {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  }
  svg {
    height: ${({ theme }) => theme.spacing["1.5"]};
    path {
      fill: ${({ theme }) => theme.colorPalettes.primary.accent[50]};
    }
  }
`;

export const BubbleElement = styled.div<Pick<BubbleProps, "alignment" | "active">>`
  background: ${({ active }) => (active ? "#EAEAFF" : "")};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
  transition: all 0.2s;

  &:hover {
    background: #f2f2f4;

    ${BubblePlayButton} {
      background: ${({ active }) => active && "#D9D9D9"};
    }

    ${({ active }) =>
      active &&
      css`
        ${BubbleDisplayName} {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      `}
  }

  ${BubbleContent} {
    text-align: ${({ alignment }) => (alignment === "right" ? "right" : "left")};
  }

  ${BubbleHeader} {
    justify-content: ${({ alignment }) => (alignment === "right" ? "flex-end" : "flex-start")};
  }
`;
