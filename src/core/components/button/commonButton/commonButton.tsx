import { IconSize } from "@icons";
import { ButtonElement } from "../button.styles";
import { ButtonVariant, CommonButtonComponentProps, CommonButtonElementProps, CommonButtonSize } from "../button.types";

export const CommonButton: React.FC<CommonButtonComponentProps> = ({
  size = CommonButtonSize.sm,
  variant = ButtonVariant.CommonDark,
  icon: IconComponent,
  label,
  testId,
  isInactive = false,
  onClick = () => false,
  className,
  makeTextBold = false,
  makeTextUppercase = false,
}) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  };

  const mapButtonSizeToIconSize = (buttonSize: CommonButtonSize): IconSize => {
    switch (buttonSize) {
      case CommonButtonSize.xs:
        return IconSize.xs;
      case CommonButtonSize.sm:
        return IconSize.sm;
      case CommonButtonSize.md:
        return IconSize.md;
      case CommonButtonSize.lg:
      default:
        return IconSize.lg;
    }
  };

  const buttonElementProps: CommonButtonElementProps = {
    size,
    variant,
    hasLabel: !!label,
    className,
    makeTextBold,
    makeTextUppercase,
  };

  return (
    <ButtonElement {...buttonElementProps} data-testid={testId} onClick={onClickHandler} disabled={isInactive}>
      {IconComponent && <IconComponent size={mapButtonSizeToIconSize(size)} />}
      {label}
    </ButtonElement>
  );
};

export default CommonButton;
