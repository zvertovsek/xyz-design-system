import React from "react";
import { ButtonComponentProps, ButtonVariant, CommonButtonComponentProps, CommonButtonSize } from "../button.types";
import { CommonButton } from "../commonButton";

export const SecondaryButton: React.FC<ButtonComponentProps> = (props) => {
  const buttonProps: CommonButtonComponentProps = {
    ...props,
    size: CommonButtonSize.lg,
    variant: ButtonVariant.Secondary,
    makeTextBold: true,
    makeTextUppercase: true,
  };

  return <CommonButton {...buttonProps} />;
};

export default SecondaryButton;
