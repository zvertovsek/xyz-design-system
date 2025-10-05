import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const ListCheckIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M4.3 20.5q-.75 0-1.275-.525Q2.5 19.45 2.5 18.7V5.3q0-.75.525-1.275Q3.55 3.5 4.3 3.5h15.4q.75 0 1.275.525.525.525.525 1.275v13.4q0 .75-.525 1.275-.525.525-1.275.525Zm0-1.5h15.4q.1 0 .2-.1t.1-.2V5.3q0-.1-.1-.2t-.2-.1H4.3q-.1 0-.2.1t-.1.2v13.4q0 .1.1.2t.2.1Zm.95-2.25h4.5v-1.5h-4.5Zm9.3-2.1 4.6-4.6-1.075-1.075-3.525 3.55-1.425-1.425-1.05 1.075Zm-9.3-1.9h4.5v-1.5h-4.5Zm0-4h4.5v-1.5h-4.5ZM4 19V5v14Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="ListCheck" graphic={graphic} />;
};

export default ListCheckIcon;
