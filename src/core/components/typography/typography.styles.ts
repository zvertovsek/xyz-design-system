import styled, { css } from "styled-components";
import { Accent, TextProps } from "./typography.types";

const getColorByAccent = (accent: Accent) => {
  switch (accent) {
    default:
      return "red";
  }
};

const colorMixin = css<TextProps>`
  color: ${({ theme, accent, color }) =>
    color ? color : accent ? getColorByAccent(accent) : theme.components.typography.color};
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.veryloose};
  ${colorMixin};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  ${colorMixin};
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  ${colorMixin};
`;

export const B1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  ${colorMixin};

  a {
    ${colorMixin};
  }
`;

export const B2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  ${colorMixin};

  a {
    ${colorMixin};
  }
`;

export const Caption = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  display: inline-block;
  text-align: left;
  ${colorMixin};
`;

export const Overline = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  ${colorMixin};
`;

export const Breadcrumb = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  ${colorMixin};
`;
