import spacing from "@system/spacing";
import React from "react";

export interface ColumnContainerProps {
  fullHeight?: boolean;
  width?: typeof spacing[keyof typeof spacing];
}

export interface ColumnProps extends ColumnContainerProps {
  title?: React.ReactNode;
  toolHeader?: React.ReactNode;
  subtitle?: string;
  footer?: React.ReactNode;
  toolbox?: React.ReactNode;
  children: React.ReactNode;
  isContentFlexed?: boolean;
  className?: string;
  onScrollContent?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  /**
   * flag that indicates whether the column should act like smaller devices (not controllable with media query because based on js state).
   */
  isSmallScreen?: boolean;
}
