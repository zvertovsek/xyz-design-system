import styled from "styled-components";

export const CheckboxSelectButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const SelectButton = styled.button`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  text-decoration: underline;
`;

export const TreeItemWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;
export const TreeNodeChildrenWrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-left: ${({ theme }) => theme.spacing[3.5]};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1) -1ms;
  max-height: ${({ isVisible }) => (isVisible ? "800px" : "0")};
  overflow: hidden;
`;

export const TreeItemArrowButton = styled.button<{ isExpanded?: boolean }>`
  display: flex;
  transform: rotate(${({ isExpanded }) => !isExpanded && "180deg"});
`;
