import React from "react";
import { BasicToggleInput, BasicToggleLabel, BasicToggleWrapper } from "./basicToggle.styles";
import { ColorVariant, BasicToggleComponentProps, BasicToggleSize } from "../toggle.types";

export const BasicToggleComponent: React.FC<BasicToggleComponentProps> = ({
  className,
  colorVariant = ColorVariant.grey,
  icon: IconComponent,
  id,
  isChecked,
  isDisabled,
  label,
  name,
  onChange,
  size = BasicToggleSize.sm,
}) => {
  return (
    <BasicToggleWrapper className={className} data-testid={id}>
      <BasicToggleInput
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <BasicToggleLabel colorVariant={colorVariant} htmlFor={id} isIconButton={!!IconComponent} size={size}>
        {IconComponent ? <IconComponent className="icon-element" /> : label}
      </BasicToggleLabel>
    </BasicToggleWrapper>
  );
};

export default BasicToggleComponent;
