import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const TrendUpIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path d="M3.35 17.75 2.3 16.7l7.05-7.1 4 4 5.825-5.75H16.2v-1.5h5.5v5.5h-1.5V8.9l-6.85 6.85-4-4Z" fill={color} />
  );

  return <BaseIcon size={size} testId="TrendUp" graphic={graphic} />;
};

export default TrendUpIcon;
