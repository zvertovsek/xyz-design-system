import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const TrendDownIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path d="M16.2 17.75v-1.5h2.975L13.35 10.5l-4 4L2.3 7.4l1.05-1.05 6 6 4-4 6.85 6.85v-2.95h1.5v5.5Z" fill={color} />
  );

  return <BaseIcon size={size} testId="TrendDown" graphic={graphic} />;
};

export default TrendDownIcon;
