import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const CopyIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M5.75 21.3q-.75 0-1.275-.525-.525-.525-.525-1.275V6.8h1.5v12.7q0 .125.087.212.088.088.213.088h9.7v1.5Zm3.5-3.5q-.75 0-1.275-.525Q7.45 16.75 7.45 16V4.625q0-.775.525-1.3T9.25 2.8h8.375q.775 0 1.3.525t.525 1.3V16q0 .75-.525 1.275-.525.525-1.3.525Zm0-1.5h8.375q.125 0 .225-.088.1-.087.1-.212V4.625q0-.125-.1-.225t-.225-.1H9.25q-.125 0-.212.1-.088.1-.088.225V16q0 .125.088.212.087.088.212.088Zm-.3 0v-12V16.3Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Copy" graphic={graphic} />;
};

export default CopyIcon;
