export interface DrawerProps {
  /**
   * Specifies the visibility of the drawer.
   */
  isOpen: boolean;
  /**
   * Callback to invoke when the visibility of the drawer changes.
   */
  changeIsOpen: (value: boolean) => void;
  /**
   * zIndex value to use in layering.
   */
  baseZIndex?: number;
  /**
   * Children that will be placed inside the drawer.
   */
  children?: React.ReactNode;
  /**
   * specifies if the drawer is hoverable.
   */
  isHoverable?: boolean;
  /**
   * specifies if the drawer is collapsible.
   */
  isCollapsible?: boolean;
  /**
   * specifies if the drawer is dynamically resizable.
   */
  isResizable?: boolean;
  /**
   * class to be used in the drawer wrapper.
   */
  className?: string;
  /**
   * Specifies max width if the drawer is resizable
   */
  maxWidth?: string;
}
