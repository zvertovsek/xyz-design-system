import styled from "styled-components";

export const DialogContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

export const DialogFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: flex-end;
  margin: 0 ${({ theme }) => theme.spacing[4]};
`;
