import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing["2"]};

  button {
    flex-grow: 1;
  }
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing["1"]} 0;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
  cursor: pointer;
  width: 24px;
  text-align: center;

  &:hover,
  &.selected {
    box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  }

  &.selected {
    background-color: ${({ theme }) => theme.colorPalettes.white};
    border-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[50]};
    color: ${({ theme }) => theme.colorPalettes.primary.accent[200]};
    border-color: transparent;
    pointer-events: none;
  }
`;
