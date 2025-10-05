import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const H2Icon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M140.001-290.001v-379.998H200v160h180.001v-160H440v379.998h-59.999v-160H200v160h-59.999Zm379.999 0v-147.691q0-29.827 21.24-51.067t51.067-21.24h155.384q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-75.384q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H520v-59.998h227.691q29.827 0 51.067 21.24 21.241 21.24 21.241 51.067v75.384q0 29.827-21.241 51.067-21.24 21.24-51.067 21.24H592.307q-5.385 0-8.847 3.462-3.461 3.462-3.461 8.847v87.693h240v59.998H520Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="H2" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default H2Icon;
