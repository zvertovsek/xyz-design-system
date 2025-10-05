import { DRAWER_CLOSED_WIDTH } from "@utils";
import styled from "styled-components";

export const VerticalMenuWrapper = styled.nav<{ isExpanded: boolean }>`
  overflow: hidden;
  width: ${({ isExpanded }) => !isExpanded && DRAWER_CLOSED_WIDTH};
`;
