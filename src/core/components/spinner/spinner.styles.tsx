import styled from "styled-components";
import { SpinnerElementProps } from "./spinner.types";

export const SpinnerWrapper = styled.div`
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SpinnerElement = styled.div<SpinnerElementProps>`
  width: ${({ size, theme }) => theme.iconSizes[size].size};
  height: ${({ size, theme }) => theme.iconSizes[size].size};
  border-color: ${({ color }) => color};
  border-left-color: transparent;
  border-width: ${({ size, thickness, theme }) =>
    thickness || theme.iconSizes[size].thickness || theme.iconSizes[size].border};
  border-style: solid;
  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LabelElement = styled.div<SpinnerElementProps>`
  margin-left: ${({ size, theme }) => theme.iconSizes[size].size};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ size, theme }) => theme.iconSizes[size].size};
  color: ${({ color }) => color};
`;
