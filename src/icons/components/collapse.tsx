import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const CollapseIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M141.77-100 100-141.77 378.23-420H180v-60h300v300h-60v-198.23L141.77-100ZM480-480v-300h60v198.23L818.23-860 860-818.23 581.77-540H780v60H480Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Collapse" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default CollapseIcon;
