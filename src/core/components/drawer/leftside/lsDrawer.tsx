import Icons, { IconSize } from "@icons";
import { useTheme } from "styled-components";
import { DrawerProps } from "../drawer.types";
import { Button, LeftSideDrawer } from "./lsDrawer.styles";

/**
 * Drawer Component
 */
export const Drawer: React.FC<DrawerProps> = ({
  baseZIndex,
  children,
  isOpen = false,
  changeIsOpen,
  isHoverable = true,
  isCollapsible = false,
  className,
}) => {
  const theme = useTheme();

  return (
    <LeftSideDrawer
      isOpen={isOpen}
      baseZIndex={baseZIndex || theme.zIndices.sticky}
      onMouseEnter={() => isHoverable && changeIsOpen(true)}
      onMouseLeave={() => isHoverable && changeIsOpen(false)}
      className={className}
    >
      {isCollapsible && (
        <Button isOpen={isOpen} onClick={() => changeIsOpen(!isOpen)} type="button">
          <Icons.ChevronUpIcon size={IconSize.sm} />
        </Button>
      )}
      {children}
    </LeftSideDrawer>
  );
};

export default Drawer;
