import { IconProps } from "@icons";
import { SyntheticEvent } from "react";

export interface ContextMenuProps {
  /**
   * Menu items to be displayed inside the menu.
   */
  items: Item[];
  /**
   * z-index to use in layering.
   */
  baseZIndex?: number;
}

export interface Item {
  label: string;
  icon?: React.ComponentType<IconProps>;
  onClick?: () => void;
}

export interface ContextMenuRef {
  show: (e: SyntheticEvent) => void;
}
