import React from "react";

export interface PanelProps {
  /**
   * Specifies the body of the panel expanded content.
   */
  children?: React.ReactNode;
  /**
   * Specifies the header of the panel.
   */
  header?: React.ReactNode;
  /**
   * Specifies if the panel is expanded.
   */
  isExpanded?: boolean;
  /**
   * Specifies the handler to execute when the panel is expanded or collapsed.
   */
  onExpandToggle?: (value: boolean) => void;
  /**
   * Specifies if the panel is expandable or collapsible.
   */
  toggleable?: boolean;
  /**
   * Specifies the class to be used in the panel wrapper.
   */
  className?: string;
  /**
   * Specifies if the panel has content.
   */
  hasContent?: boolean;
  /**
   * Specifies the test id of the panel wrapper.
   */
  testId?: string;
  /**
   * Specifies if the whole header is clickable (for toggle).
   */
  isHeaderClickable?: boolean;
}
