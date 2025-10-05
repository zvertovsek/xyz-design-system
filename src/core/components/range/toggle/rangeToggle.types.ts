export interface RangeToggleComponentProps {
  /**
   * Specifies the list of range options.
   */
  options: RangeOptionModel[];
  /**
   * Specifies the id of the selected option.
   */
  selectedOptionId?: string;
  /**
   * Specifies the handler to execute on change of the selected option.
   */
  onSelect: (option: RangeOptionModel) => void;
  /**
   * Specifies the list of ids of the disabled options.
   */
  disabledOptionIds?: string[];
}

export interface RangeOptionModel {
  id: string;
  label: string;
}
