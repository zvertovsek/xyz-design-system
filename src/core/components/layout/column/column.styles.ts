import Typography from "@core/components/typography";
import { HEADER_HEIGHT, deviceSize, deviceSizeTypes, styleScrollbar } from "@utils";
import styled, { css } from "styled-components";
import { ColumnContainerProps } from "./column.types";

export const ColumnContainer = styled.section<ColumnContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  width: ${({ width }) => width};
  max-height: ${({ fullHeight, theme }) => fullHeight && `calc(100vh - ${HEADER_HEIGHT} - ${theme.spacing["3.5"]})`};

  &.reduced {
    width: ${({ theme }) => theme.sizes[88]};
  }
`;

export const ColumnHeader = styled.div<{ isSmallScreen: boolean }>`
  flex-shrink: 0;

  ${({ theme, isSmallScreen }) => css`
    @media ${deviceSize.getMediaQuerySize(
        deviceSizeTypes.Range.MinMax,
        theme.breakpoints.xxl,
        theme.breakpoints.xxxl,
      )} {
      flex-basis: ${!isSmallScreen && theme.spacing[20]};
    }

    @media ${deviceSize.getMediaQuerySize(deviceSizeTypes.Range.Min, theme.breakpoints.xxxl)} {
      flex-basis: ${isSmallScreen ? theme.spacing[20] : theme.spacing[16]};
    }
  `}
`;

export const ColumnHeaderTitleContainer = styled.div<{ isSmallScreen: boolean }>`
  display: none;
  justify-content: space-between;

  ${({ theme, isSmallScreen }) => css`
    @media ${deviceSize.getMediaQuerySize(
        deviceSizeTypes.Range.MinMax,
        theme.breakpoints.xxl,
        theme.breakpoints.xxxl,
      )} {
      display: ${!isSmallScreen && "flex"};
    }

    @media ${deviceSize.getMediaQuerySize(deviceSizeTypes.Range.Min, theme.breakpoints.xxxl)} {
      display: flex;
    }
  `}
`;

export const ColumnToolbox = styled.div`
  flex-basis: ${({ theme }) => theme.spacing[10]};
  flex-shrink: 0;
`;

export const ColumnTitle = styled(Typography.H2)`
  flex-grow: 1;
  color: ${({ theme }) => theme.colorPalettes.primary.accent["800"]};
`;

export const ColumnSubtitle = styled(Typography.B2)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent["500"]};
`;

export const ColumnContent = styled.div<{ isContentFlexed: boolean }>`
  flex: ${({ isContentFlexed }) => isContentFlexed && "1"};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.spacing[2]};
  margin-right: -${({ theme }) => theme.spacing[2]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  ${styleScrollbar};
`;

export const ColumnFooter = styled(Typography.B1)`
  flex-basis: ${({ theme }) => theme.spacing[10]};
  flex-shrink: 0;
`;
