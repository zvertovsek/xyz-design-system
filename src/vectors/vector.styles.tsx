import styled from "styled-components";
import { VectorStyledComponentProps } from "./vector.types";

export const ResponsiveSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})<VectorStyledComponentProps>`
  height: auto;
  width: 100%;
  max-width: ${({ width }) => width};
`;
