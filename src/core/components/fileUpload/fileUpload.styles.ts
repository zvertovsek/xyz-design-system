import { styleScrollbar } from "@utils";
import styled from "styled-components";
import Typography from "../typography";

export const FileUploadContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const FileUploadLabel = styled(Typography.B2)`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const FileUploadButton = styled.a`
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spacing[1]};
`;

export const FileUploadInput = styled.input``;

export const UploadedFiles = styled.div`
  display: block;
  overflow-y: auto;
  padding-right: 0.5rem;
  ${styleScrollbar};
`;

export const FileWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[1]} 0;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};
  border-radius: ${({ theme }) => theme.radii.sm};

  &::after {
    content: "";
    display: block;
    height: ${({ theme }) => theme.spacing[2]};
    width: ${({ progress }) => progress}%;
    background-color: ${({ theme }) => theme.colorPalettes.primary.accent[500]};
    border-radius: ${({ theme }) => theme.radii.sm};
  }
`;
