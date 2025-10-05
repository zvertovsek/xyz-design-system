export enum SpinnerSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export interface SpinnerElementProps {
  size: SpinnerSize;
  color: string;
  thickness?: string;
}

export interface SpinnerProps {
  /**
   * Spinner size
   */
  size?: SpinnerSize;
  /**
   * color
   */
  color?: string;
  /**
   * Label
   */
  label?: string;
  /**
   * Spinner thickness
   */
  thickness?: string;
}
