export interface FlexContainerProps {
  className?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  gap?: string;
}
