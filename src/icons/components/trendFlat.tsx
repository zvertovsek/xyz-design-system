import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const TrendFlatIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path d="m17.5 16.15-1.075-1.05 2.35-2.35H3.25v-1.5h15.525L16.45 8.9l1.075-1.05L21.65 12Z" fill={color} />
  );

  return <BaseIcon size={size} testId="TrendFlat" graphic={graphic} />;
};

export default TrendFlatIcon;
