import Icons, { IconSize } from "@icons";
import { RIGHT_DRAWER_WIDTH } from "@utils";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { DrawerProps } from "../drawer.types";
import { Button, ContentWrapper, RightSideDrawer } from "./rsDrawer.styles";

/**
 * Drawer Component
 */
export const Drawer: React.FC<DrawerProps> = ({
  baseZIndex,
  children,
  isOpen = false,
  changeIsOpen,
  isCollapsible = true,
  isResizable = false,
  maxWidth,
  className,
}) => {
  const theme = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [drawerWidth, setDrawerWidth] = useState<number>(Number(RIGHT_DRAWER_WIDTH));

  useEffect(() => {
    if (!drawerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(([drawerElement]) => {
      setDrawerWidth(drawerElement.target.clientWidth);
    });

    resizeObserver.observe(drawerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <RightSideDrawer
      ref={drawerRef}
      isOpen={isOpen}
      isResizable={isResizable}
      baseZIndex={baseZIndex || theme.zIndices.sticky}
      maxWidth={maxWidth}
      className={className}
      data-testid="right-side-drawer"
    >
      {isCollapsible && (
        <Button
          isOpen={isOpen}
          onClick={() => changeIsOpen(!isOpen)}
          rightPosition={drawerWidth}
          type="button"
          data-testid="right-side-drawer-arrow-button"
        >
          <Icons.ChevronUpIcon size={IconSize.sm} />
        </Button>
      )}
      <ContentWrapper isHidden={!isOpen}>{children}</ContentWrapper>
    </RightSideDrawer>
  );
};

export default Drawer;
