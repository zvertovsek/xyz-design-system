import { styleScrollbar } from "@utils";
import styled from "styled-components";
import { FlexContainerProps } from "./containers.types";

export const Container = styled.div``;

export const FlexboxContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
`;

export const ScrollableContainer = styled(Container)`
  display: block;
  flex: 1;
  overflow-y: auto;
  padding-right: 0.5rem;
  ${styleScrollbar};
`;
