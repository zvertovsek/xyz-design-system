import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colorPalettes.white};
  border-radius: ${({ theme }) => theme.radii.sm};
`;
