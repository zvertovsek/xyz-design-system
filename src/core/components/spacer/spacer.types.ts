import spacing from "@system/spacing";

type SpacingKeys = keyof typeof spacing;

export interface SpacerProps {
  size: typeof spacing[SpacingKeys];
  color?: string;
}
