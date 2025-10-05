import Layout from "@core/components/layout";
import styled from "styled-components";
import Typography from "../typography";

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FilesContainer = styled.div<{ isLarge: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  flex-basis: ${({ isLarge }) => isLarge && "80%"};
`;

export const UploadContainer = styled(Layout.Tile)<{ isDragging: boolean }>`
  flex: 1;
  border: ${({ theme }) => `1px dashed ${theme.colorPalettes.black}`};
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  user-select: ${({ isDragging }) => isDragging && "none"};
`;

export const FileUploadButton = styled.button`
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spacing[1]};
  margin-left: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
`;

export const FileUploadInput = styled.input``;

export const FileUploadLabel = styled(Typography.B2)`
  text-align: center;
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
`;

export const FileWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPalettes.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing[5]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const IconContainer = styled(Layout.FlexboxContainer)<{ isDragging: boolean }>`
  position: absolute;
  visibility: ${({ isDragging }) => !isDragging && "hidden"};
  opacity: ${({ isDragging }) => !isDragging && "0"};
  background-color: ${({ theme, isDragging }) => isDragging && `${theme.colorPalettes.primary.default[100]}E6`};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition:
    background-color,
    opacity 0.2s;
`;
