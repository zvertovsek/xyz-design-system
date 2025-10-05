import { styleScrollbar } from "@utils";
import styled from "styled-components";

export const SubmenuRootContainer = styled.div`
  width: 176px;
  height: 10px;
`;

export const SubmenuContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
  ${styleScrollbar};
`;

export const SubmenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const SubmenuSlider = styled.div<{
  height: number | undefined;
  offsetY: number | undefined;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  height: ${({ height }) => height}px;
  width: 2px;
  transition: 0.25s;
  transform: translateY(${({ offsetY }) => offsetY}px);
  z-index: 1;
`;
