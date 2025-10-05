import Icons, { IconSize } from "@icons";
import React from "react";
import { useTheme } from "styled-components";
import Typography from "../typography";
import { TagElement } from "./tag.styles";
import { Severity, TagProps } from "./tag.types";
import { getSeverities } from "./tag.utils";

export const TagComponent = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      id,
      severity = Severity.Default,
      label,
      icon: IconComponent,
      onClick,
      onKeyDown,
      onHover,
      isRemovable,
      isDisabled = false,
      isSelected = false,
      isBold = false,
      className,
      testId = "tag",
      minWidth,
    },
    ref,
  ) => {
    const theme = useTheme();
    const colorText = isDisabled ? theme.colorPalettes.primary.default[400] : getSeverities(theme)[severity].color;

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (onClick && id) {
        onClick(id);
      }
    };

    return (
      <TagElement
        ref={ref}
        isClickable={!!onClick}
        isTagRemovable={isRemovable}
        isBold={isBold}
        onClick={onClickHandler}
        onKeyDown={onKeyDown}
        onMouseOver={onHover}
        isDisabled={isDisabled}
        tabIndex={onClick && !isDisabled ? 0 : -1}
        className={`${className} ${isSelected ? "selected" : ""}`}
        severity={severity}
        data-testid={testId}
        width={minWidth}
      >
        {IconComponent && <IconComponent size={IconSize.sm} />}
        <Typography.B2 as="span" color={colorText || theme.colorPalettes.primary.accent[900]}>
          {label}
        </Typography.B2>
        {isRemovable && <Icons.CloseIcon size={IconSize.xs} color={colorText} />}
      </TagElement>
    );
  },
);

export default TagComponent;
