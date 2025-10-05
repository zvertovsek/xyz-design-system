import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const ParagraphIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M386.925-181.54v-238.461h-3.846q-74.923 0-127.461-52.538Q203.08-525.078 203.08-600t52.538-127.461q52.538-52.538 127.461-52.538h308.457V-720h-80v538.46h-59.998V-720H446.924v538.46h-59.999Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Paragraph" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default ParagraphIcon;
