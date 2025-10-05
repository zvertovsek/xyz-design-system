import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const BoldIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M293.54-215.001v-529.998H488q61.153 0 110.576 38.077 49.423 38.077 49.423 102.538 0 44.845-21.654 73.115-21.654 28.269-46.654 41.038 30.769 10.616 58.769 41.962 28 31.346 28 84.423 0 76.691-56.538 112.768T496-215.001H293.54Zm85.997-79.69h113.232q47.231 0 66.77-26.231 19.539-26.231 19.539-50.309 0-24.078-19.539-50.308Q540-447.77 490.923-447.77H379.537v153.079Zm0-230.308h103.77q36.462 0 57.809-20.846 21.347-20.847 21.347-49.924 0-30.924-22.578-50.54-22.577-19.615-55.347-19.615H379.537v140.925Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Bold" graphic={graphic} viewBox="0 -960 960 960" />;
};

export default BoldIcon;
