interface IconSizeProps {
  size: string;
  margin: string;
  /** @deprecated use thickness instead */
  border: string;
  thickness: string;
}

export interface IconSizes {
  xs: IconSizeProps;
  sm: IconSizeProps;
  md: IconSizeProps;
  lg: IconSizeProps;
  xl: IconSizeProps;
}
