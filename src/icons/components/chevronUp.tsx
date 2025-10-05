import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const ChevronUp: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = <path d="m7.4 15.05-1.05-1.075L12 8.325l5.65 5.65-1.05 1.075-4.6-4.6Z" fill={color} />;

  return <BaseIcon size={size} testId="ChevronUp" graphic={graphic} />;
};

export default ChevronUp;
