export interface SelectComponentProps {
  /**
   * Specifies the list of options of the select component.
   */
  options: OptionModel[];
  /**
   * Specifies the handler to execute when an option is selected.
   */
  onSelect: (option: OptionModel) => void;
  /**
   * Specifies the id of the selected option.
   */
  selectedOptionId?: string;
  /**
   * Specifies the placeholder of the search input.
   */
  placeholder?: string;
  /**
   * Specifies if the select component is disabled.
   */
  isDisabled?: boolean;
  /**
   * Specifies the list of disabled options in the select component.
   */
  disabledOptions?: string[];
  /**
   * Specifies the class name of the select component container.
   */
  className?: string;
  /**
   * Specifies if the label of the select component should truncate.
   */
  shouldLabelTruncate?: boolean;
  /**
   * Specifies the background color of the select component.
   */
  backgroundColor?: "white" | "grey";
}

export interface IndicatorProps {
  isDropdownOpened: boolean;
}

export interface DropdownProps extends DropdownSize {
  isDropdownOpened: boolean;
  isOnTop: boolean;
  color: "white" | "grey";
}

export interface DropdownSize {
  width: number;
  height: number;
}

export interface OptionModel {
  label: string;
  id: string;
}
