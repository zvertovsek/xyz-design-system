import styled from "styled-components";

export const ProgressBarIndicator = styled.button`
  content: "";
  position: absolute;
  opacity: 0;
  width: 4px;
  height: 4px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colorPalettes.primary.accent[600]};
  transform: scale(4);
  top: 4px;
  cursor: pointer;
`;

export const ProgressBarElement = styled.div`
  left: 0;
  height: 100%;
  width: 0%;
  background: ${({ theme }) => theme.colorPalettes.primary.accent[400]};
  border-radius: ${({ theme }) => theme.radii.md};
  position: relative;
`;

export const ProgressBarWrapper = styled.div`
  height: 12px;
  background: ${({ theme }) => theme.colorPalettes.primary.default[300]};
  position: relative;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    ${ProgressBarElement} {
      background: ${({ theme }) => theme.colorPalettes.primary.accent[300]};
    }

    ${ProgressBarIndicator} {
      opacity: 1;
    }
  }
`;
