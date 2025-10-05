import styled from "styled-components";
import Typography from "../../../typography";

export const TabWrapper = styled.li`
  display: inline;
  box-sizing: content-box;
  min-width: 170px;
  flex-shrink: 0;
  height: ${({ theme }) => theme.sizes["14"]};
  margin-right: ${({ theme }) => theme.spacing["2"]};
`;

export const TabTitle = styled(Typography.H3)<{ isAI: boolean }>`
  white-space: nowrap;
  color: ${({ theme, isAI }) => (isAI ? theme.colorPalettes.primary.ai[300] : theme.colorPalettes.primary.accent[600])};
`;

export const TabElement = styled.a<{ isAI: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["0.5"]};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing["2"]};
  width: 100%;
  height: 100%;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colorPalettes.white};
  border-radius: ${({ theme }) => theme.radii.sm};

  &:hover {
    box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    h3 {
      color: ${({ theme, isAI }) =>
        isAI ? theme.colorPalettes.primary.ai[500] : theme.colorPalettes.primary.accent[800]};
    }
  }

  &.selected {
    border-top: 1.9px solid ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    border-left: 1.9px solid ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    h3 {
      color: ${({ theme, isAI }) =>
        isAI ? theme.colorPalettes.primary.ai[700] : theme.colorPalettes.primary.accent[900]};
    }
  }
`;
