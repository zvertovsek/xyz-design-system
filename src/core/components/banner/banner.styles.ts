import styled, { DefaultTheme } from "styled-components";
import { BannerElementProps, BannerType } from "./banner.types";

export const getBannerBackgroundColors = (theme: DefaultTheme): { [key in BannerType]: string } => ({
  userInteraction: theme.colorPalettes.primary.accent[50],
  aiInteraction: theme.colorPalettes.primary.ai[50],
});

export const BannerElement = styled.div<BannerElementProps>`
  background-color: ${({ type, theme }) =>
    (type && getBannerBackgroundColors(theme)[type]) || theme.colorPalettes.primary.default[200]};
  margin: 0;
  padding: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  border-radius: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
`;
