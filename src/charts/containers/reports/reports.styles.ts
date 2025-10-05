import { Typography } from "@core/components";
import { Container } from "@core/components/layout";
import styled from "styled-components";
import { ReportContainerProps, ReportWrapperProps } from "./reports.types";

export const ReportHeading = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ReportBackLinkWrapper = styled(Container)`
  padding-bottom: ${({ theme }) => theme.spacing["4"]};

  button {
    padding: 0;
    padding: 0;
    text-transform: none;
    font-weight: normal;
    line-height: ${({ theme }) => theme.spacing[6]};
    gap: ${({ theme }) => theme.spacing[1]};

    svg {
      fill: ${({ theme }) => theme.colorPalettes.primary.accent[800]};
      transform: rotate(-90deg);
    }
  }
`;

export const ReportTitle = styled(Typography.H3)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
`;

export const ReportDescription = styled(Typography.B2)`
  color: ${({ theme }) => theme.colorPalettes.black};
  padding-top: ${({ theme }) => theme.spacing[2]};
`;

export const ReportWrapper = styled.div<ReportWrapperProps>`
  display: ${({ hasSideInformationPanel }) => hasSideInformationPanel && "flex"};
  flex: 1 1 0;
  overflow-y: auto;
`;

export const ReportContainer = styled.div<ReportContainerProps>`
  position: relative;
  width: ${({ width }) => (Number.isInteger(width) ? `${width}px` : typeof width === "string" ? width : "")};
  height: ${({ height }) => (Number.isInteger(height) ? `${height}px` : typeof height === "string" ? height : "")};
  margin-left: ${({ leftMargin, theme }) => (leftMargin ? theme.spacing[4] : 0)};
  margin-right: ${({ rightMargin, theme }) => (rightMargin ? theme.spacing[4] : 0)};

  svg {
    max-height: ${({ height }) => height && `${height}px`};
  }
`;

export const ReportSideInfoPanel = styled.div<ReportContainerProps>`
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-top: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: ${({ height }) => height && `${height}px`};
`;

export const ReportSideInfoPanelItem = styled.div<{ color: string }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[6]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  &::before {
    position: absolute;
    display: block;
    content: "";
    top: ${({ theme }) => theme.spacing[2]};
    left: 0;
    width: ${({ theme }) => theme.sizes[4]};
    height: ${({ theme }) => theme.sizes[4]};
    background: ${({ color }) => color};
  }
`;

export const ReportLegend = styled.div`
  padding: ${({ theme }) => theme.spacing[10]};
  display: flex;
  flex-flow: row wrap;
  gap: ${({ theme }) => theme.spacing[6]};

  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;

export const ReportLegendColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReportLegendItem = styled.div<{ color: string }>`
  position: relative;
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-size: ${({ theme }) => theme.fontSizes["xs"]};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  width: 25%;
  min-width: 25%;

  span {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes["xl"]};
    line-height: ${({ theme }) => theme.lineHeights.snug};
  }

  &::before {
    position: absolute;
    display: block;
    content: "";
    top: ${({ theme }) => theme.spacing[5]};
    left: 0;
    width: ${({ theme }) => theme.sizes[4]};
    height: ${({ theme }) => theme.sizes[4]};
    background: ${({ color }) => color};
  }
`;
