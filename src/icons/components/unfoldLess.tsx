import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const UnfoldLessIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1ZM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="UnfoldLess" graphic={graphic} />;
};

export default UnfoldLessIcon;
