import styled, { css } from "styled-components";
import { LabelAlignmentType, SwitchToggleProps } from "../toggle.types";

export const SwitchToggleSwitch = styled.div`
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    display: block;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::before {
    height: 26px;
    width: 46px;
    background: ${({ theme }) => theme.colorPalettes.primary.default[400]};
    border-radius: ${({ theme }) => theme.radii["2xl"]};
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translate(0, -50%);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colorPalettes.white};
  }
`;

export const SwitchToggleText = styled.span`
  margin-left: ${({ theme }) => theme.spacing["2.5"]};
`;

export const SwitchToggleInputWrapper = styled.div``;

const getLabelStyles = (alignment?: LabelAlignmentType) => {
  if (alignment === "left") {
    return css`
      flex-direction: row;

      ${SwitchToggleText} {
        margin-left: 0;
        margin-right: ${({ theme }) => theme.spacing["2.5"]};
      }
    `;
  }

  return css`
    flex-direction: row-reverse;
  `;
};

export const SwitchToggleElement = styled.label<Pick<SwitchToggleProps, "labelAlignment">>`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  ${({ labelAlignment }) => getLabelStyles(labelAlignment)}
`;

export const SwitchToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked {
    & + ${SwitchToggleSwitch} {
      &::before {
        background: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
      }

      &:after {
        transform: translate(100%, -50%);
      }
    }
  }

  &:hover {
    & + ${SwitchToggleSwitch} {
      &::before {
        background: ${({ theme }) => theme.colorPalettes.primary.accent[200]};
      }
    }
  }

  &:disabled {
    & + ${SwitchToggleSwitch} {
      cursor: not-allowed;

      &::before {
        background: #f1f3f3;
      }
    }
  }
`;
