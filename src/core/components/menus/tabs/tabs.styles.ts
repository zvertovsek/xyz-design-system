import { styleScrollbar } from "@utils";
import styled from "styled-components";

export const TabList = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
`;

export const TabListContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing["0.5"]};
  padding-bottom: ${({ theme }) => theme.spacing["3"]};
  margin-bottom: ${({ theme }) => theme.spacing["3"]};

  ${styleScrollbar}

  overflow-x: auto;
`;
