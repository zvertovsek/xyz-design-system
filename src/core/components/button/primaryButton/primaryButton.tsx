import React from "react";
import { ButtonComponentProps, ButtonVariant, CommonButtonComponentProps, CommonButtonSize } from "../button.types";
import { CommonButton } from "../commonButton";

export const PrimaryButton: React.FC<ButtonComponentProps> = ({ hasAiIntent = false, ...props }) => {
  const buttonProps: CommonButtonComponentProps = {
    ...props,
    size: CommonButtonSize.lg,
    variant: hasAiIntent ? ButtonVariant.PrimaryAI : ButtonVariant.Primary,
    makeTextBold: true,
    makeTextUppercase: true,
  };

  return <CommonButton {...buttonProps} />;
};

export default PrimaryButton;
