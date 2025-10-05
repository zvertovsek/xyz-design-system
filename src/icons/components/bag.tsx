import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const BagIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M18 5.04167V3.20833C18 2.2 17.1 1.375 16 1.375H12C10.9 1.375 10 2.2 10 3.20833V5.04167H7C5.9 5.04167 5 5.86667 5 6.875V15.125C5 16.1333 5.9 16.9583 7 16.9583H21C22.1 16.9583 23 16.1333 23 15.125V6.875C23 5.86667 22.1 5.04167 21 5.04167H18ZM16 5.04167H12V3.20833H16V5.04167ZM2 8.70833C1.45 8.70833 1 9.12083 1 9.625V18.7917C1 19.8 1.9 20.625 3 20.625H18C18.55 20.625 19 20.2125 19 19.7083C19 19.2042 18.55 18.7917 18 18.7917H3V9.625C3 9.12083 2.55 8.70833 2 8.70833Z"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="Bag" graphic={graphic} />;
};

export default BagIcon;
