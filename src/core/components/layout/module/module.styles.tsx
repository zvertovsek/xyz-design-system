import Typography from "@core/components/typography";
import {
  DRAWER_CLOSED_WIDTH,
  HEADER_HEIGHT,
  TABSMENU_HEIGHT,
  deviceSize,
  deviceSizeTypes,
  ellipsis,
  styleScrollbar,
} from "@utils";
import styled, { css } from "styled-components";
import { FlexboxContainer } from "../containers";
import { Tile } from "../tile/tile.styles";

export const ModuleContainer = styled.div`
  height: 100vh;
  max-width: calc(100vw - ${DRAWER_CLOSED_WIDTH});
  display: flex;
  flex-flow: column;
  background: ${({ theme }) => theme.colorPalettes.primary.default[100]};
  padding: ${({ theme }) => theme.spacing["3.5"]} ${({ theme }) => theme.spacing["5"]};
  min-width: 0;
`;

export const ModuleHeaderWrapper = styled.header`
  position: relative;
  height: ${HEADER_HEIGHT};
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  padding-bottom: ${({ theme }) => theme.spacing["2"]};

  button {
    padding: 0;

    svg {
      fill: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
      transform: rotate(-90deg);
    }
  }
`;

export const ModuleHeaderTitle = styled(FlexboxContainer)`
  justify-content: space-between;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const BreadcrumbWrapper = styled(Typography.Breadcrumb)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colorPalettes.primary.accent["600"]};

  ${Typography.Breadcrumb} {
    text-decoration: none;
  }

  svg {
    transform: rotate(90deg);
    path {
      fill: ${({ theme }) => theme.colorPalettes.primary.accent["600"]};
    }
  }
`;

export const BacklinkWrapper = styled(BreadcrumbWrapper)`
  text-decoration: none;
  svg {
    transform: rotate(-90deg);
  }
`;

export const PageTitle = styled(Typography.H1)`
  ${ellipsis};
  padding-top: ${({ theme }) => theme.spacing["6"]};
  color: ${({ theme }) => theme.colorPalettes.primary.accent["800"]};

  a {
    color: ${({ theme }) => theme.colorPalettes.primary.accent["800"]};
  }
`;

export const ModuleMain = styled.div<{ hasTabsmenu?: boolean }>`
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  column-gap: ${({ theme }) => theme.spacing[2]};
`;

export const ModuleAside = styled(Tile)<{ fixContainerHeight?: boolean }>`
  display: none;
  width: ${({ theme }) => theme.sizes["48"]};
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.sizes["2"]};
  gap: ${({ theme }) => theme.sizes["4"]};
  ${({ fixContainerHeight }) =>
    fixContainerHeight && `height: calc(100vh - ${HEADER_HEIGHT} - ${TABSMENU_HEIGHT} - 22px);`};

  ${({ theme }) => css`
    @media ${deviceSize.getMediaQuerySize(deviceSizeTypes.Range.Min, theme.breakpoints.lg)} {
      display: flex;
    }
  `}
`;

export const ModuleContent = styled(Tile)`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${styleScrollbar};
`;
