import React from "react";
import { ButtonVariant, CommonButtonComponentProps, IconButtonComponentProps } from "../button.types";
import { CommonButton } from "../commonButton";

export const IconButton: React.FC<IconButtonComponentProps> = ({ isOnWhiteBackground = false, ...props }) => {
  const buttonProps: CommonButtonComponentProps = {
    ...props,
    variant: isOnWhiteBackground ? ButtonVariant.CommonDark : ButtonVariant.CommonLight,
  };

  return <CommonButton {...buttonProps} />;
};

export default IconButton;
