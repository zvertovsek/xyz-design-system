import React from "react";
import {
  ColumnContainer,
  ColumnContent,
  ColumnFooter,
  ColumnHeader,
  ColumnHeaderTitleContainer,
  ColumnSubtitle,
  ColumnTitle,
  ColumnToolbox,
} from "./column.styles";
import { ColumnProps } from "./column.types";

export const Column: React.FC<ColumnProps> = ({
  title,
  toolHeader,
  subtitle,
  children,
  fullHeight = false,
  footer,
  toolbox,
  width,
  onScrollContent,
  isContentFlexed = false,
  isSmallScreen = false,
  className,
}) => {
  return (
    <ColumnContainer fullHeight={fullHeight} width={width} className={className} data-testid="columnComponent">
      {title && (
        <ColumnHeader isSmallScreen={isSmallScreen} data-testid="columnComponent-header">
          <ColumnHeaderTitleContainer isSmallScreen={isSmallScreen}>
            <ColumnTitle data-testid="columnComponent-title">{title}</ColumnTitle>
            {toolHeader}
          </ColumnHeaderTitleContainer>
          {subtitle && <ColumnSubtitle data-testid="columnComponent-subtitle">{subtitle}</ColumnSubtitle>}
        </ColumnHeader>
      )}
      {toolbox && <ColumnToolbox data-testid="columnComponent-toolbox">{toolbox}</ColumnToolbox>}
      <ColumnContent onScroll={onScrollContent} isContentFlexed={isContentFlexed} data-testid="columnComponent-content">
        {children}
      </ColumnContent>
      {footer && <ColumnFooter data-testid="columnComponent-footer">{footer}</ColumnFooter>}
    </ColumnContainer>
  );
};
