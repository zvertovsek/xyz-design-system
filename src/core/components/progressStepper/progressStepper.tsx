import React from "react";
import { ProgressStepperProps } from "./progressStepper.types";
import { Step } from "./step";
import { StepListContainer } from "./progressStepper.styles";

export const ProgressStepper: React.FC<ProgressStepperProps> = ({ items, onChangeHandler, selectedItem }) => {
  const handleCurrentStepClick = (event: React.MouseEvent<HTMLElement>, key) => {
    event.preventDefault();

    if (onChangeHandler) {
      onChangeHandler(key);
    }
  };

  return (
    <StepListContainer role="tablist">
      {items.map((step, index) => (
        <Step
          {...step}
          handleClick={step.isDisabled ? undefined : (e) => handleCurrentStepClick(e, step.key)}
          stepNumber={index + 1}
          isSelected={selectedItem === step.key}
          isDisabled={step.isDisabled}
        />
      ))}
    </StepListContainer>
  );
};

export default ProgressStepper;
