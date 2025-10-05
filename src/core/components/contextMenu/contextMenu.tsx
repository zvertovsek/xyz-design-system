import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { ItemButton, ItemWrapper, MenuWrapper, Text } from "./contextMenu.styles";
import { ContextMenuProps, ContextMenuRef, Item } from "./contextMenu.types";
import FocusLock from "react-focus-lock";
import { HorizontalSpacer } from "@core/components/spacer";
import { IconSize } from "@icons";
import { showPortal } from "@utils";

const MENU_WIDTH = 175;

export const ContextMenu = React.forwardRef<ContextMenuRef, ContextMenuProps>(({ items, baseZIndex }, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPortalVisible, setPortalVisibility] = useState<boolean>(false);
  const [topPosition, setTopPosition] = useState<number>();
  const [horizontalPosition, setHorizontalPosition] = useState<number>();
  const [isPositionedLeft, setIsPositionedLeft] = useState<boolean>();
  const contextMenuRef = useRef<HTMLUListElement>(null);
  const theme = useTheme();

  const hideMenu = () => {
    setIsVisible(false);
    setTimeout(() => {
      setPortalVisibility(false);
    }, 200);
  };

  const handleClickMenuItem = (item: Item) => {
    hideMenu();
    item.onClick?.();
  };

  useImperativeHandle(
    ref,
    () => ({
      show: (e) => {
        if (!isVisible) {
          e.stopPropagation();

          const triggerElementRect = e.currentTarget.getBoundingClientRect();
          const isLeftSpaceEnough = window.innerWidth - triggerElementRect.left > MENU_WIDTH;
          setTopPosition(triggerElementRect.bottom + 3);
          setHorizontalPosition(
            isLeftSpaceEnough ? triggerElementRect.left : window.innerWidth - triggerElementRect.right,
          );
          setIsPositionedLeft(isLeftSpaceEnough);
          setPortalVisibility(true);
          //support animation modal
          setTimeout(() => {
            setIsVisible(true);
          }, 0);
        }
      },
    }),
    [isVisible],
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const contextMenuElement = contextMenuRef.current;
      if (contextMenuElement && !contextMenuElement.contains(event.target as Element)) {
        hideMenu();
      }
    }

    if (isVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      {isPortalVisible &&
        showPortal(
          <MenuWrapper
            ref={contextMenuRef}
            baseZIndex={baseZIndex || theme.zIndices.tooltip}
            isVisible={isVisible}
            topPosition={topPosition}
            horizontalPosition={horizontalPosition}
            isPositionedLeft={isPositionedLeft}
            width={MENU_WIDTH}
            role="menu"
            data-testid="context-menu"
          >
            <FocusLock disabled={!isVisible} returnFocus>
              {items.map((item) => {
                const { label, icon: Icon } = item;

                return (
                  <ItemWrapper key={label} role="menuitem">
                    <ItemButton
                      onClick={() => {
                        handleClickMenuItem(item);
                      }}
                    >
                      {Icon ? (
                        <Icon color={theme.colorPalettes.primary.accent[700]} size={IconSize.sm} />
                      ) : (
                        <HorizontalSpacer size={theme.spacing[1]} />
                      )}
                      <Text as="span">{label}</Text>
                    </ItemButton>
                  </ItemWrapper>
                );
              })}
            </FocusLock>
          </MenuWrapper>,
        )}
    </>
  );
});

export default ContextMenu;
