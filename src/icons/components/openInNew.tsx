import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const OpenInNewIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M5.3 20.5q-.75 0-1.275-.525Q3.5 19.45 3.5 18.7V5.3q0-.75.525-1.275Q4.55 3.5 5.3 3.5h6.325V5H5.3q-.1 0-.2.1t-.1.2v13.4q0 .1.1.2t.2.1h13.4q.1 0 .2-.1t.1-.2v-6.325h1.5V18.7q0 .75-.525 1.275-.525.525-1.275.525Zm4.425-5.175-1.05-1.05L17.95 5H14V3.5h6.5V10H19V6.05Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="OpenInNew" graphic={graphic} />;
};

export default OpenInNewIcon;
