import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const FilterIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M11 20q-.425 0-.712-.288Q10 19.425 10 19v-6L4.2 5.6q-.375-.5-.112-1.05Q4.35 4 5 4h14q.65 0 .913.55.262.55-.113 1.05L14 13v6q0 .425-.287.712Q13.425 20 13 20Zm1-7.7L16.95 6h-9.9Zm0 0Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Filter" graphic={graphic} />;
};

export default FilterIcon;
