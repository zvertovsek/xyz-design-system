import styled, { DefaultTheme } from "styled-components";

export const getColorCellByValue = (value: number, colorPalettes: DefaultTheme["colorPalettes"]): string => {
  if (isNaN(value)) {
    return colorPalettes.primary.default[400];
  }

  if (value <= 19) {
    return colorPalettes.primary.accent[900];
  }

  return colorPalettes.white;
};

export const getBackgroundColorCellByValue = (value: number, colorPalettes: DefaultTheme["colorPalettes"]): string => {
  if (isNaN(value)) {
    return colorPalettes.primary.default[100];
  }

  if (value <= 19) {
    return colorPalettes.primary.ai[100];
  } else if (value <= 39) {
    return colorPalettes.primary.ai[300];
  } else if (value <= 59) {
    return colorPalettes.primary.ai[500];
  } else if (value <= 79) {
    return colorPalettes.primary.ai[700];
  } else {
    return colorPalettes.primary.ai[900];
  }
};

export const getBorderRadiusCellByDirection = (
  direction: "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right",
  radii: DefaultTheme["radii"],
): string => {
  switch (direction) {
    case "top":
      return `${radii.sm} ${radii.sm} 0 0`;
    case "bottom":
      return `0 0 ${radii.sm} ${radii.sm}`;
    case "top-left":
      return `${radii.sm} 0 0 0`;
    case "top-right":
      return `0 ${radii.sm} 0 0`;
    case "bottom-left":
      return `0 0 0 ${radii.sm}`;
    case "bottom-right":
      return `0 0 ${radii.sm} 0`;
  }
};

export const HeatMapWrapper = styled.div<{ numColumns: number }>`
  display: grid;
  grid-template-columns: ${({ numColumns }) => `repeat(${numColumns}, 1fr)`};
`;

export const NoDataText = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 107px;
  text-align: center;
  border-radius: 4px;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
  color: ${({ theme }) => theme.colorPalettes.primary.default[600]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
