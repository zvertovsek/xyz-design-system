import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const PauseIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" stroke={color} strokeWidth={2} />;

  return <BaseIcon size={size} testId="Pause" graphic={graphic} />;
};

export default PauseIcon;
