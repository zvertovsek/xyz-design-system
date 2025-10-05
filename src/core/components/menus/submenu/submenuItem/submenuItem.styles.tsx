import styled from "styled-components";
import { SubmenuList } from "../submenu.styles";

export const SubmenuItemWrapper = styled.li`
  display: flex;
  margin-bottom: 0.25rem;
  align-items: center;
`;

export const SubmenuItemElement = styled.a<{ isAI: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme, isAI }) => (isAI ? theme.colorPalettes.primary.ai[300] : theme.colorPalettes.primary.accent[600])};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  padding: ${({ theme }) => theme.spacing["2"]};
  background-color: ${({ theme }) => theme.colorPalettes.white};
  text-decoration: none;
  word-break: break-word;

  &:hover {
    color: ${({ theme, isAI }) =>
      isAI ? theme.colorPalettes.primary.ai[500] : theme.colorPalettes.primary.accent[800]};
  }

  &.selected {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default["100"]};
    color: ${({ theme, isAI }) =>
      isAI ? theme.colorPalettes.primary.ai[700] : theme.colorPalettes.primary.accent[900]};
  }
`;

export const SubmenuItemCounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[50]};
  padding: ${({ theme }) => theme.spacing[1]};
  border-radius: 2px;
  width: ${({ theme }) => theme.sizes[5]};
  height: ${({ theme }) => theme.sizes[5]};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  flex-shrink: 0;
  margin: -1px 0;
`;

export const SubmenuChildrenListWrapper = styled(SubmenuList)`
  padding-left: ${({ theme }) => theme.sizes["5"]};

  & ${SubmenuItemElement} {
    &:hover,
    &.selected {
      background-color: ${({ theme }) => theme.colorPalettes.white};
      color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    }
  }
`;
