import { deviceSize, deviceSizeTypes, styleScrollbar } from "@utils";
import styled, { css } from "styled-components";

export const ModalWrapper = styled.div<{ isVisible: boolean; baseZIndex: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ baseZIndex }) => baseZIndex};
  transition: background-color 0.3s;

  ${({ isVisible }) => css`
    transition: ${!isVisible && "transform 0.3s ease-in"};
    transform: translateY(${isVisible ? "0px" : "100vh"});
    background-color: ${({ theme }) => (isVisible ? `${theme.colorPalettes.primary.default[500]}80` : "transparent")};
  `}
`;

export const ModalBoxWrapper = styled.div<{ isVisible: boolean; type: "default" | "dialog" }>`
  animation: ${({ isVisible }) => (isVisible ? "scaleUp" : "scaleDown")} ease-in-out 0.3s forwards;
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[50]};
  width: ${({ theme, type }) => (type === "dialog" ? theme.sizes["80"] : theme.sizes["180"])};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colorPalettes.primary.accent[900]}40;

  ${({ theme, type }) => css`
    @media ${deviceSize.getMediaQuerySize(deviceSizeTypes.Range.Max, theme.breakpoints.md)} {
      width: ${type !== "dialog" && theme.sizes["160"]};
    }

    @media ${deviceSize.getMediaQuerySize(deviceSizeTypes.Range.Max, theme.breakpoints.sm)} {
      width: ${type !== "dialog" && theme.sizes["120"]};
    }

    @media ${deviceSize.getMediaQuerySize(deviceSizeTypes.Range.Max, theme.breakpoints.xs)} {
      width: ${type !== "dialog" && theme.sizes["100"]};
    }
  `}

  @keyframes scaleUp {
    0% {
      transform: scale(0.3) translateY(100vh);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }

  @keyframes scaleDown {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
    100% {
      transform: scale(0.3) translateY(100vh);
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const ModalHeaderWrapper = styled.div<{ type: "default" | "dialog" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radii.sm} ${({ theme }) => theme.radii.sm} 0 0;
  height: ${({ theme, type }) => (type === "dialog" ? theme.sizes[10] : theme.sizes[16])};
`;

export const ModalBodyWrapper = styled.div<{ type: "default" | "dialog"; allowOverflow: boolean }>`
  min-height: ${({ theme, type }) => (type === "dialog" ? theme.sizes[20] : theme.sizes[72])};
  max-height: ${({ theme, type }) => (type === "dialog" ? theme.sizes[32] : theme.sizes[160])};
  ${({ allowOverflow }) => !allowOverflow && "overflow-y: auto;"}
  ${styleScrollbar};
`;

export const ModalFooterWrapper = styled.div`
  height: ${({ theme }) => theme.sizes[14]};
  border-radius: 0 0 ${({ theme }) => theme.radii.sm} ${({ theme }) => theme.radii.sm};
`;

export const ModalCloseButton = styled.button`
  display: flex;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing[1]};
  &:hover {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]}80;
  }
`;
