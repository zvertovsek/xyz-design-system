import styled from "styled-components";

export const TooltipBox = styled.div`
  position: fixed;
  visibility: hidden;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndices.hide};
  max-width: ${({ theme }) => theme.spacing[40]};
  text-align: center;
  padding: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colorPalettes.white};
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[600]};
  border-radius: ${({ theme }) => theme.radii.xs};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  white-space: pre-wrap;
`;
