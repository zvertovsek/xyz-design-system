import { css } from "styled-components";

export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const styleScrollbar = css`
  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.sizes[2]};
    height: ${({ theme }) => theme.sizes[2]};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.radii.sm};
    background-color: ${({ theme }) => theme.colorPalettes.primary.accent[400]};
  }
  ::-webkit-scrollbar-track {
    border-radius: ${({ theme }) => theme.radii.sm};
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
  }
`;
