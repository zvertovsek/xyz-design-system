import Icons from ".";

export enum IconSize {
  xs = 12,
  sm = 16,
  md = 20,
  lg = 24,
  xl = 32,
}

export type IconProps = {
  color?: string;
  size?: IconSize;
};

export interface BaseIconProps {
  size: IconSize;
  viewBox?: string;
  graphic: JSX.Element;
  testId?: string;
}

export type Icon = keyof typeof Icons;
