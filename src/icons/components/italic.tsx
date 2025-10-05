import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const ItalicIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M215.77-215.001v-72.306h152.692l129.616-385.386H345.386v-72.306h366.152v72.306H571.153L441.537-287.307h140.385v72.306H215.77Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Italic" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default ItalicIcon;
