import Icons, { IconSize } from "@icons";
import { StepProps } from "../progressStepper.types";
import { ProgressStepperWrapper, Label, IncompletedIcon } from "./step.styles";
import React from "react";
import { useTheme } from "styled-components";

export const StepComponent: React.FC<StepProps> = ({
  label,
  isDisabled = false,
  isCompleted = false,
  isSelected = false,
  stepNumber,
  handleClick,
}) => {
  const theme = useTheme();
  return (
    <ProgressStepperWrapper
      isSelected={isSelected}
      isCompleted={isCompleted}
      onClick={handleClick}
      disabled={isDisabled}
      role="tab"
    >
      {isCompleted ? (
        <Icons.CheckCircleIcon size={IconSize.xl} color={theme.colorPalettes.primary.accent[600]} />
      ) : (
        <IncompletedIcon isSelected={isSelected} data-testid="incompletedIcon">
          <Label data-testid="stepIndex"> {stepNumber} </Label>
        </IncompletedIcon>
      )}
      {isSelected && <Label data-testid="stepTitle">{label}</Label>}
    </ProgressStepperWrapper>
  );
};

export default StepComponent;
