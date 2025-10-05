import { IconProps } from "@icons";

export enum ButtonVariant {
  CommonLight = "common_light",
  CommonDark = "common_dark",
  Primary = "primary",
  PrimaryAI = "primary_ai",
  Secondary = "secondary",
  TextOnly = "textonly",
  TextOnlyAI = "textonly_ai",
}

export enum CommonButtonSize {
  lg = "large",
  md = "medium",
  sm = "small",
  xs = "extraSmall",
}

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specifies the test id of the button.
   */
  testId?: string;
  /**
   * Specifies if the button is disabled.
   */
  isInactive?: boolean;
  /**
   * Specifies the class name of the button.
   */
  className?: string;
  /**
   * Specifies the handler to execute when the user clicks on the button.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface CommonButtonComponentProps extends BaseButtonProps {
  /**
   * Specifies the label of the button.
   */
  label?: string;
  /**
   * Specifies the size of the button.
   */
  size?: CommonButtonSize;
  /**
   * Specifies the variant type of the button.
   */
  variant: ButtonVariant;
  /**
   * Specifies the icon to be displayed in the button.
   */
  icon?: React.ComponentType<IconProps>;
  /**
   * Specifies if the text of the button should be bold.
   */
  makeTextBold?: boolean;
  /**
   * Specifies if the text of the button should be uppercase.
   */
  makeTextUppercase?: boolean;
}

export type CommonButtonElementProps = Pick<
  CommonButtonComponentProps,
  "size" | "variant" | "className" | "makeTextBold" | "makeTextUppercase"
> & {
  hasLabel: boolean;
};

export interface IconButtonComponentProps extends BaseButtonProps {
  /**
   * Specifies the icon to be displayed in the button.
   */
  icon: React.ComponentType<IconProps>;
  /**
   * Specifies the label of the button.
   */
  label?: string;
  /**
   * Specifies the size of the button.
   */
  size?: CommonButtonSize;
  /**
   * Depending on the specified background, the icon button will have different variants.
   */
  isOnWhiteBackground?: boolean;
}

export interface ButtonComponentProps extends BaseButtonProps {
  /**
   * Specifies the label of the button.
   */
  label: string;
  /**
   * Depending if the button has AI intent, it will use a different variant.
   */
  hasAiIntent?: boolean;
  /**
   * Specifies the icon to be displayed in the button.
   */
  icon?: React.ComponentType<IconProps>;
  /**
   * Specifies the size of the button.
   */
  size?: CommonButtonSize;
}
