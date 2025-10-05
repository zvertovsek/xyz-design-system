import React from "react";
import { PrimaryToggleInput, PrimaryToggleLabel, PrimaryToggleWrapper } from "./primaryToggle.styles";
import { PrimaryToggleProps, SelectionType } from "../toggle.types";

export const PrimaryToggleComponent: React.FC<PrimaryToggleProps> = ({
  className,
  id,
  isChecked,
  isDisabled,
  label,
  name,
  onChange,
  selectionType = SelectionType.User,
}) => {
  return (
    <PrimaryToggleWrapper className={className} data-testid={id}>
      <PrimaryToggleInput
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <PrimaryToggleLabel selectionType={selectionType} htmlFor={id}>
        {label}
      </PrimaryToggleLabel>
    </PrimaryToggleWrapper>
  );
};

export default PrimaryToggleComponent;
