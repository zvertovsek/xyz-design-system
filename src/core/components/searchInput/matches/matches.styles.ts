import styled from "styled-components";

export const MatchElement = styled.div`
  display: flex;
  align-items: center;
  min-width: 60px;
  text-align: center;
`;

export const MatchButton = styled.button<{ orientation?: "top" | "bottom" }>`
  display: flex;
  padding: 0;
  svg {
    fill: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
    width: 100%;
    height: auto;
    transform: ${({ orientation }) => (orientation === "bottom" ? "rotate(180deg)" : "")};
    margin-top: ${({ orientation }) => (orientation === "bottom" ? "-4px" : "")};
    margin-bottom: ${({ orientation }) => (orientation === "bottom" ? "-4px" : "")};
  }
`;

export const MatchLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.verytight};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  width: 50px;
`;

export const MatchLabelSelected = styled.span`
  color: ${({ theme }) => theme.colorPalettes.secondary.color1[700]};
`;

export const NoResult = styled.div`
  color: #ff6541;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.verytight};
  min-width: 85px;
`;
