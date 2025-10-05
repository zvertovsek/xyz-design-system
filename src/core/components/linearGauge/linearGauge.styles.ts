import styled from "styled-components";
import Typography from "../typography";

export const LinearGaugeBar = styled.div`
  display: flex;
  height: ${({ theme }) => theme.sizes[4]};
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
`;

export const LinearBar = styled.div<{ width: number; isHighlighted: boolean }>`
  display: flex;
  width: ${({ width }) => width}%;
  height: inherit;
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colorPalettes.primary.accent[900] : theme.colorPalettes.primary.accent[600]};
  border-radius: inherit;
`;

export const Text = styled(Typography.B1)`
  width: ${({ theme }) => theme.sizes[8]};
  text-align: end;
`;

export const LinearGaugeRootContainer = styled.div`
  width: 500px;
`;
