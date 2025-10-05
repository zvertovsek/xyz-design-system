import React from "react";
import { ButtonComponentProps, ButtonVariant, CommonButtonComponentProps, CommonButtonSize } from "../button.types";
import { CommonButton } from "../commonButton";

export const TextButton: React.FC<ButtonComponentProps> = ({
  hasAiIntent = false,
  size = CommonButtonSize.lg,
  ...props
}) => {
  const buttonProps: CommonButtonComponentProps = {
    ...props,
    size,
    variant: hasAiIntent ? ButtonVariant.TextOnlyAI : ButtonVariant.TextOnly,
    makeTextBold: true,
    makeTextUppercase: true,
  };

  return <CommonButton {...buttonProps} />;
};

export default TextButton;
