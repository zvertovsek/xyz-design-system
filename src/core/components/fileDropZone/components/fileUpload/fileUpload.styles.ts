import { styled } from "styled-components";
import Typography from "@core/components/typography";

export const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress, theme }) => (progress === 100 ? "0%" : `${theme.spacing[60]}`)};
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
    transition: width 0.4s ease;
  }
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
`;

export const MetadataAndDeleteIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const FileWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPalettes.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing[5]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const MetadataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: flex-start;
`;

export const ErrorMessage = styled(Typography.Caption)`
  color: ${({ theme }) => theme.colorPalettes.rag.danger[600]};
`;
