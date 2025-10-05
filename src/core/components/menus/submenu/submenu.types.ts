export interface SubmenuProps {
  /**
   * Items of the submenu
   */
  items: SubmenuItemProps[];
  /**
   * The current selected submenu items ids
   */
  currentSelections: string[];
  /**
   * A callback is called when clicking the submenu item
   */
  onItemClickHandler: (item: SubmenuItemFormatted) => void;
}

export interface SubmenuItemProps {
  /**
   * Label of each submenu item
   */
  label: string;
  /**
   * Label counter rendered on the right of each submenu item
   */
  counterLabel?: string;
  /**
   * * The id of the currently selected `SubmenuItem`.
   */
  id: string;
  /**
   * Path - Item's path, if it is used as a menuitem
   */
  path: string;
  /**
   * children of each item to be shown.
   */
  children?: SubmenuItemProps[];

  isAI?: boolean;
}

export interface SubmenuItemFormatted extends SubmenuItemProps {
  /**
   * * The ids of the selected element and its ancestors.
   */
  idsPath: string[];
  /**
   * * children with the new formatted type.
   */
  children?: SubmenuItemFormatted[];
}

export interface SubmenuContextProps {
  handleClick: (item: SubmenuItemFormatted) => void;
  currentSelections: string[];
}
