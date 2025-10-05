import styled from "styled-components";

export const RadioElement = styled.div``;

export const RadioLabel = styled.label`
  position: relative;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};

  &::before,
  &:after {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    border-radius: 50%;
    top: 50%;
  }

  &::before {
    left: -24px;
    border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.primary.accent[800]};
    width: ${({ theme }) => theme.spacing[3]};
    height: ${({ theme }) => theme.spacing[3]};
  }

  &::after {
    left: -22px;
    width: ${({ theme }) => theme.spacing[2]};
    height: ${({ theme }) => theme.spacing[2]};
  }
`;

export const RadioInput = styled.input`
  opacity: 0;

  &:checked {
    + ${RadioLabel} {
      &:after {
        background: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
      }
    }
  }

  &:hover {
    + ${RadioLabel} {
      &:before {
        border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.primary.accent[200]};
      }
    }
  }

  &:hover:checked {
    + ${RadioLabel} {
      &:after {
        background: ${({ theme }) => theme.colorPalettes.primary.accent[200]};
      }
    }
  }

  &:disabled {
    + ${RadioLabel} {
      &:before {
        border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.primary.default[400]};
      }
    }
  }

  &:disabled:hover {
    + ${RadioLabel} {
      cursor: default;

      &:before {
        border: ${({ theme }) => theme.borders["1px"]} ${({ theme }) => theme.colorPalettes.primary.default[400]};
      }

      &:after {
        background: transparent;
      }
    }
  }

  &:disabled:checked {
    + ${RadioLabel} {
      &:after {
        background: ${({ theme }) => theme.colorPalettes.primary.default[400]};
      }
    }
  }

  &:disabled:checked:hover {
    + ${RadioLabel} {
      &:after {
        background: ${({ theme }) => theme.colorPalettes.primary.default[400]};
      }
    }
  }
`;
