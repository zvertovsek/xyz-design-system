import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const AnalysingIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M400-319.23q100 0 170-70.11 70-70.12 70-170.28t-70-170.27Q500-800 400-800t-170 70.11q-70 70.11-70 170.27 0 100.16 70 170.28 70 70.11 170 70.11Zm-30-128.85v-259.23h60v259.23h-60Zm-136.92 0v-181.15h60v181.15h-60Zm273.84 0V-590h60v141.92h-60ZM818.23-100 590.46-327.77q-39.08 32-87.6 49.88Q454.34-260 400-260q-125.62 0-212.81-87.17T100-559.94q0-125.6 87.17-212.83Q274.34-860 399.94-860q125.6 0 212.83 87.19Q700-685.62 700-560q0 54.34-17.89 102.86-17.88 48.52-49.88 87.22L860-142.15 818.23-100Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Analysing" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default AnalysingIcon;
