import React from "react";
import Radio from "./components/radio/radio";
import { RadioGroupElement } from "./radioGroup.styles";
import { RadioGroupProps } from "./radioGroup.types";

export const RadioGroup: React.FC<RadioGroupProps> = ({ options = [], selected, onChange, name }) => {
  if (!options.length) {
    return null;
  }

  return (
    <RadioGroupElement data-testid="radioGroup">
      {options.map((el) => (
        <Radio
          {...el}
          name={name}
          key={`${name}-${el.value}`}
          checked={el.value === selected}
          onChange={() => onChange(el)}
        />
      ))}
    </RadioGroupElement>
  );
};

export default RadioGroup;
