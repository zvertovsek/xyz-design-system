import React from "react";
import { LabelElement, SpinnerElement, SpinnerWrapper } from "./spinner.styles";
import { SpinnerElementProps, SpinnerProps, SpinnerSize } from "./spinner.types";

/**
 * Spinner Component
 */
export const SpinnerComponent: React.FC<SpinnerProps> = ({
  size = SpinnerSize.md,
  color = "black",
  label,
  thickness,
}) => {
  const props: SpinnerElementProps = {
    size,
    color,
    thickness,
  };

  return (
    <SpinnerWrapper data-testid="spinner">
      <SpinnerElement {...props} />
      {label && <LabelElement {...props}>{label}</LabelElement>}
    </SpinnerWrapper>
  );
};

export default SpinnerComponent;
