import Icons from "@icons";
import React from "react";
import { CommonButtonSize } from "../button/button.types";
import { ContentWrapper, HeaderContent, HeaderWrapper, PanelWrapper, ToggleButton } from "./panel.styles";
import { PanelProps } from "./panel.types";

export const Panel: React.FC<PanelProps> = ({
  className,
  children,
  header,
  onExpandToggle,
  hasContent = true,
  isExpanded = false,
  toggleable = false,
  isHeaderClickable,
  testId = "panel",
}) => {
  const clickableHeader = isHeaderClickable !== undefined ? isHeaderClickable : toggleable;

  return (
    <PanelWrapper tabIndex={0} data-testid={testId} className={className}>
      {header && (
        <HeaderWrapper
          isClickable={clickableHeader}
          onClick={() => clickableHeader && !!onExpandToggle && onExpandToggle(!isExpanded)}
        >
          <HeaderContent>{header}</HeaderContent>
          {toggleable && (
            <ToggleButton
              size={CommonButtonSize.xs}
              icon={Icons.ChevronUpIcon}
              isExpanded={isExpanded}
              isOnWhiteBackground={true}
              onClick={() => !clickableHeader && !!onExpandToggle && onExpandToggle(!isExpanded)}
            />
          )}
        </HeaderWrapper>
      )}
      {hasContent && <ContentWrapper isExpanded={!toggleable ? true : isExpanded}>{children}</ContentWrapper>}
    </PanelWrapper>
  );
};

export default Panel;
