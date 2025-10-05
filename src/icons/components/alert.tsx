import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const AlertIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M11.25 11.575h1.5V6.25h-1.5Zm.75 3.5q.35 0 .575-.238.225-.237.225-.587 0-.325-.225-.562-.225-.238-.575-.238t-.575.238q-.225.237-.225.562 0 .35.225.587.225.238.575.238Zm0 4.725q3.1-2.75 4.675-5.263 1.575-2.512 1.575-4.337 0-2.85-1.812-4.65-1.813-1.8-4.438-1.8t-4.438 1.8Q5.75 7.35 5.75 10.2q0 1.825 1.575 4.337Q8.9 17.05 12 19.8Zm0 2q-3.9-3.4-5.825-6.3-1.925-2.9-1.925-5.3 0-3.625 2.338-5.788Q8.925 2.25 12 2.25q3.075 0 5.413 2.162Q19.75 6.575 19.75 10.2q0 2.4-1.925 5.3T12 21.8Zm0-11.6Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Alert" graphic={graphic} />;
};

export default AlertIcon;
