import { IconProps } from "@icons";

export interface ToggleIconProps extends IconProps {
  className: string;
}

export enum ColorVariant {
  grey = "grey",
  white = "white",
}

export enum BasicToggleSize {
  lg = "large",
  md = "medium",
  sm = "small",
  xs = "extraSmall",
}

export enum SelectionType {
  Ai = "ai",
  User = "user",
}

export type LabelAlignmentType = "left" | "right";

export interface BasicToggleComponentProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  colorVariant?: ColorVariant;
  icon?: React.ComponentType<ToggleIconProps> | string;
  id?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: BasicToggleSize;
}

export type ToggleProps = Omit<BasicToggleComponentProps, "icon" | "label"> &
  Required<Pick<BasicToggleComponentProps, "label">>;
export type IconToggleProps = Omit<BasicToggleComponentProps, "icon" | "label"> &
  Required<Pick<BasicToggleComponentProps, "icon">>;
export interface PrimaryToggleProps extends BasicToggleComponentProps {
  selectionType: SelectionType;
}

export interface SwitchToggleProps extends BasicToggleComponentProps {
  label: string;
  labelAlignment?: LabelAlignmentType;
}
