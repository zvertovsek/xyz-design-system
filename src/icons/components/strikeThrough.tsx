import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const StrikeThroughIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M486-172.309q-70.615 0-124.999-39.999-54.385-40-79.615-109.538l64.152-27.614q16.692 46.846 52.539 77.076 35.846 30.231 89.154 30.231 46.615 0 86-23.462 39.385-23.461 39.385-74.385 0-22.616-7.192-39.154-7.192-16.539-20.346-30.847h81.998q7.308 13.231 11.346 30.616Q682.461-362 682.461-340q0 80.23-58.423 123.961-58.423 43.73-138.038 43.73ZM90-490.001v-59.998H870v59.998H90.001Zm392-302.152q59.846 0 103.768 27.692 43.923 27.692 70.923 85.076l-63.767 28.615q-12.078-28.231-38.885-49.885-26.808-21.654-70.808-21.654-51.386 0-82.232 26.386-30.847 26.385-29.615 65.924h-69.845q-2.231-65.154 47.577-113.654 49.807-48.5 132.884-48.5Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="StrikeThrough" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default StrikeThroughIcon;
