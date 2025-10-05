import React from "react";
import { CheckboxInput, CheckboxLabel, CheckboxWrapper } from "./checkbox.styles";
import { CheckboxProps } from "./checkbox.types";

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  onChange,
  isChecked,
  hasChildrenChecked,
  isDisabled,
}) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        hasChildrenChecked={hasChildrenChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <CheckboxLabel as="label" htmlFor={id} isDisabled={isDisabled} data-testid="checkbox-label">
        {label}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default CheckboxComponent;
