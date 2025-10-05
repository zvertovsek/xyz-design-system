import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const BulletListIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M372.309-210.001v-59.998h447.69v59.998h-447.69Zm0-240v-59.998h447.69v59.998h-447.69Zm0-240v-59.998h447.69v59.998h-447.69Zm-165.77 516.538q-27.447 0-46.992-19.545-19.546-19.545-19.546-46.992 0-27.447 19.546-46.992 19.545-19.545 46.992-19.545 27.447 0 46.992 19.545 19.545 19.545 19.545 46.992 0 27.447-19.545 46.992-19.545 19.545-46.992 19.545Zm0-240q-27.447 0-46.992-19.545-19.546-19.545-19.546-46.992 0-27.447 19.546-46.992 19.545-19.545 46.992-19.545 27.447 0 46.992 19.545 19.545 19.545 19.545 46.992 0 27.447-19.545 46.992-19.545 19.545-46.992 19.545Zm0-240q-27.447 0-46.992-19.545-19.546-19.545-19.546-46.992 0-27.447 19.546-46.992 19.545-19.545 46.992-19.545 27.447 0 46.992 19.545 19.545 19.545 19.545 46.992 0 27.447-19.545 46.992-19.545 19.545-46.992 19.545Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="BulletList" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default BulletListIcon;
