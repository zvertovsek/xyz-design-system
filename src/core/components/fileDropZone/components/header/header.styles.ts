import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPalettes.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  display: flex;
  align-items: space-between;
  position: relative;
  min-width: ${({ theme }) => theme.spacing[120]};
  height: ${({ theme }) => theme.spacing[20]};
`;

export const FileWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPalettes.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
`;

export const TicIconWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
