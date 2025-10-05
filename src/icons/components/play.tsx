import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const PlayIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = <path d="M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" fill={color} />;

  return <BaseIcon size={size} testId="Play" graphic={graphic} />;
};

export default PlayIcon;
