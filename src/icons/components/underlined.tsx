import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const UnderlinedIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M213.847-155.003v-59.998h532.306v59.998H213.847ZM480-298.848q-93.307 0-145.653-56.653-52.346-56.653-52.346-151.806V-823.46h74.152v319.845q0 60.615 32.231 97.154 32.231 36.539 91.616 36.539t91.616-36.539q32.231-36.539 32.231-97.154V-823.46h74.152v316.153q0 95.153-52.346 151.806Q573.307-298.848 480-298.848Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Underlined" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default UnderlinedIcon;
