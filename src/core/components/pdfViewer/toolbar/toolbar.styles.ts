import { styled } from "styled-components";

export const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndices.docked};
  padding: ${({ theme }) => theme.spacing[2]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ToolbarButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
  }
`;
