import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const AudioFileIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M430-206.154q35.307 0 59.577-24.269 24.269-24.27 24.269-59.577v-154.616h114.615v-70.768h-150v159.231q-10.23-9.154-22.346-13.423-12.115-4.27-26.115-4.27-35.307 0-59.577 24.269-24.269 24.27-24.269 59.577t24.269 59.577q24.27 24.269 59.577 24.269ZM252.309-100.001q-30.308 0-51.308-21t-21-51.308v-615.382q0-30.308 21-51.308t51.308-21h317.692l209.998 209.998v477.692q0 30.308-21 51.308t-51.308 21H252.309Zm287.692-520V-800H252.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v615.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h455.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-447.692H540.001ZM240-800v179.999V-800v640V-800Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="AudioFile" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default AudioFileIcon;
