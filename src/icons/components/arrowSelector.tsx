import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const ArrowSelectorIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="m320-410 79-110h170L320-716v306ZM551-80 406-392 240-160v-720l560 440H516l144 309-109 51ZM399-520Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="ArrowSelector" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default ArrowSelectorIcon;
