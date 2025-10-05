import styled from "styled-components";

export const ContainerWrapper = styled.div<{ isEditorDisabled: boolean }>`
  border: 1px solid ${({ theme }) => theme.colorPalettes.primary.default[200]};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: ${({ isEditorDisabled }) => isEditorDisabled && "not-allowed"};
  background-color: ${({ theme }) => theme.colorPalettes.white};

  .ProseMirror {
    padding: ${({ theme }) => theme.spacing[2]};
    cursor: ${({ isEditorDisabled }) => !isEditorDisabled && "text"};

    p {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }

    &:focus {
      outline: none;
    }

    p.is-editor-empty:first-child::before {
      color: ${({ theme }) => theme.colorPalettes.primary.accent[400]};
      content: attr(data-placeholder);
      font-size: ${({ theme }) => theme.fontSizes.xs};
      float: left;
      height: 0;
      pointer-events: none;
    }

    ul,
    ol {
      padding-left: ${({ theme }) => theme.spacing[4]};
    }
  }
`;
