import { styled } from "styled-components";

export const FullScreenButton = styled.button`
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const FullScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: black;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal};
  background-color: rgba(0, 0, 0, 0.5);

  ${FullScreenButton} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ViewerWrapper = styled.div`
  width: 70vw;
`;
