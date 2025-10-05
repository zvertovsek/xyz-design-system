export interface DatePickerProps {
  /**
   * Placeholder of the date picker to be shown.
   */
  placeholder: string;
  /**
   * Format used for the shown date.
   */
  dateFormat?: string;
  /**
   * Flag that indicates whether the date picker is disabled.
   */
  isDisabled?: boolean;
}

export interface CustomInputProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: () => void;
}
