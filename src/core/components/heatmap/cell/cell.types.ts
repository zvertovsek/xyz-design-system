import { IconProps } from "@icons";

export interface CellProps {
  label?: string;
  hasGap?: boolean;
  color: string;
  backgroundColor: string;
  justifyContent: "flex-start" | "center" | "flex-end";
  isHighlightable?: boolean;
  onHover?: (e: React.SyntheticEvent<HTMLDivElement>) => void;
  onClick?: () => void;
  icon?: React.ComponentType<IconProps>;
  width?: string;
  borderRadius?: string;
}
