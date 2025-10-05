import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const UnfoldMoreIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45ZM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="UnfoldMore" graphic={graphic} />;
};

export default UnfoldMoreIcon;
