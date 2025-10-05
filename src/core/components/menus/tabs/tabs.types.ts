export interface TabsProps {
  /**
   * Items of the tabs
   */
  items: TabProps[];
  /**
   * Specify which content tab should be initially selected when the component is first rendered.
   */
  defaultTabValue?: number;
  /**
   * The current selected tab
   */
  currentlySelectedTab: string;
  /**
   * A callback is called when the tab changes
   */
  onChangeHandler: (key: string) => void;
}

export interface TabProps {
  /**
   * Text of the tab
   */
  label: string;
  /**
   * Description
   */
  description?: React.ReactNode;
  /**
   * The id of the currently selected `Tab`.
   */
  key: string;
  /**
   * If the current tab is selected
   */
  isSelected?: boolean;
  /**
   * Tab's disabled flag
   */
  isInactive?: boolean;
  /**
   * Callback which will be called when button is clicked
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Path - tab's path, if it is used as a menuitem
   */
  path?: string;
  /**
   * If the current tab data was AI generated
   */
  isAI?: boolean;
}
