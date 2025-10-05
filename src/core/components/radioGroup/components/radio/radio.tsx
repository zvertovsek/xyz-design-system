import React from "react";
import { RadioElement, RadioInput, RadioLabel } from "./radio.styles";
import { RadioProps } from "../../radioGroup.types";

const Radio: React.FC<RadioProps> = ({ label, value, onChange, name, ...props }) => {
  const id = `${name}-${value}`;

  return (
    <RadioElement>
      <RadioInput
        type="radio"
        {...props}
        value={value}
        checked={props.checked}
        id={id}
        onChange={() => onChange(value)}
      />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioElement>
  );
};

export default Radio;
