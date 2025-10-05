import React from "react";
import { SwitchToggleProps } from "../toggle.types";
import {
  SwitchToggleElement,
  SwitchToggleSwitch,
  SwitchToggleInput,
  SwitchToggleText,
  SwitchToggleInputWrapper,
} from "./switchToggle.styles";

const SwitchToggle: React.FC<SwitchToggleProps> = ({
  isDisabled,
  isChecked,
  label,
  labelAlignment = "right",
  onChange,
}) => {
  return (
    <SwitchToggleElement data-testid="switchToggle" labelAlignment={labelAlignment}>
      <SwitchToggleText>{label}</SwitchToggleText>
      <SwitchToggleInputWrapper>
        <SwitchToggleInput type="checkbox" disabled={isDisabled} checked={isChecked} onChange={onChange} />
        <SwitchToggleSwitch />
      </SwitchToggleInputWrapper>
    </SwitchToggleElement>
  );
};

export default SwitchToggle;
