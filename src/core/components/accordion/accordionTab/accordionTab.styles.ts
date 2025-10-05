import Typography from "@core/components/typography";
import { styleScrollbar } from "@utils";
import styled, { css } from "styled-components";

export const AccordionTabHeader = styled.div<{ isExpanded: boolean; isExpandable: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[50]};

  ${({ isExpandable }) =>
    isExpandable &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
      }
    `}

  svg {
    transform: rotate(${({ isExpanded }) => (isExpanded ? "180" : "90")}deg);
  }
`;

export const AccordionTabHeaderContent = styled(Typography.B2)`
  flex-grow: 1;
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
`;

export const AccordionTabBody = styled.div<{ isExpanded: boolean }>`
  transition: all 0.3s ease-in-out;
  max-height: 0;
  opacity: 0;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[0.5]};
  ${styleScrollbar};

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      max-height: 200px;
      margin: ${({ theme }) => theme.spacing[3]};
      opacity: 1;
    `}
`;

export const AccordionTabHeaderButton = styled.button<{ isVisible: boolean }>`
  display: flex;
  display: ${({ isVisible }) => !isVisible && "none"};
  margin-right: ${({ theme }) => theme.spacing[1]};
`;
