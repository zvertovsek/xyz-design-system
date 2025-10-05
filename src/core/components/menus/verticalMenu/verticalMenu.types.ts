import { Icon } from "@icons";

export type ViewState = "extended" | "closed";

export interface VerticalMenuProps {
  /**
   * An array of groups to be shown.
   */
  itemGroups: VerticalMenuGroup[];
  /**
   * Callback to invoke when menu item is selected.
   */
  onMenuItemSelectHandler: (item: VerticalMenuItem) => void;
  /**
   * The view type of the menu. It can be either extended or closed
   */
  viewState: ViewState;
}

export interface VerticalMenuGroup {
  /**
   * key of the group.
   */
  key: string;
  /**
   * name of the group.
   */
  label: string;
  /**
   * items of each group.
   */
  items: VerticalMenuItem[];
}

export interface VerticalMenuItem {
  /**
   * key of the item.
   */
  key: string;
  /**
   * name of the item.
   */
  label: string;
  /**
   * icon of the item.
   */
  icon?: Icon;
  /**
   * children of each item to be shown.
   */
  children?: VerticalMenuItem[];
  /**
   * Specifies whether an item is selected or not.
   */
  isSelected: boolean;
  /**
   * Specifies whether an item is disabled or not.
   */
  isDisabled?: boolean;
  /**
   * path to go to when the item gets selected.
   */
  itemPath?: string;
}

export interface MenuContextProps {
  viewState: ViewState;
  onMenuItemSelectHandler: (item: VerticalMenuItem) => void;
}
