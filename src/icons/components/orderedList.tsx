import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const OrderedListIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M140.001-100.001v-47.692h100v-42.308h-60v-47.692h60v-42.308h-100v-47.692h113.846q14.385 0 24.115 9.731 9.731 9.73 9.731 24.115v47.693q0 14.384-9.731 24.115-9.73 9.73-24.115 9.73 14.385 0 24.115 9.731 9.731 9.731 9.731 24.115v44.616q0 14.384-9.731 24.115-9.73 9.731-24.115 9.731H140.001Zm0-266.153V-470q0-14.384 9.731-24.115 9.731-9.731 24.115-9.731h66.154v-42.308h-100v-47.692h113.846q14.385 0 24.115 9.731 9.731 9.731 9.731 24.115v70q0 14.384-9.731 24.115-9.73 9.731-24.115 9.731h-66.154v42.308h100v47.692H140.001Zm60-266.153v-180h-60v-47.692h107.692v227.692h-47.692Zm172.308 422.306v-59.998h447.69v59.998h-447.69Zm0-240v-59.998h447.69v59.998h-447.69Zm0-240v-59.998h447.69v59.998h-447.69Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="OrderedList" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default OrderedListIcon;
