import styled from "styled-components";
import { SpacerProps } from "./spacer.types";

export const VerticalSpacer = styled.div<SpacerProps>`
  display: block;
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
`;

export const HorizontalSpacer = styled.div<SpacerProps>`
  width: ${({ size }) => size};
  background-color: ${({ color }) => color};
`;
