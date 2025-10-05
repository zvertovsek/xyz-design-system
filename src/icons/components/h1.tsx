import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const H1Icon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M220.001-290.001v-379.998H280v160h180.001v-160H520v379.998h-59.999v-160H280v160h-59.999Zm459.999 0v-320h-80v-59.998h139.999v379.998H680Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="H1" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default H1Icon;
