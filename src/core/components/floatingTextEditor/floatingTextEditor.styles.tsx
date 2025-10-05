import { ModalBoxWrapper } from "@core/components/modal/modal.styles";
import { ContainerWrapper } from "@core/components/textEditor/textEditor.styles";
import Typography from "@core/components/typography";
import styled from "styled-components";

export const FloatingTextEditorWrapper = styled(ModalBoxWrapper)<{ top: number; left: number }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  resize: both;
  overflow: hidden;
  box-shadow: none;
  width: ${({ theme }) => theme.spacing[160]};
  height: ${({ theme }) => theme.spacing[88]};
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[50]};
  z-index: ${({ theme }) => theme.zIndices.overlay};

  ${ContainerWrapper} {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex-grow: 1;
    margin: ${({ theme }) => theme.spacing[4]};
    margin-top: 0;
  }
`;

export const Label = styled(Typography.Caption)`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  user-select: none;
`;

export const CollapseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  padding: ${({ theme }) => theme.spacing[1]};
`;

export const Header = styled.div`
  cursor: move;
  padding: ${({ theme }) => theme.spacing[4]};
  padding-bottom: 0;
`;
