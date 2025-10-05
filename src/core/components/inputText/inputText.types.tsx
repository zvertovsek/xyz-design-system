export interface InputTextProps {
  /**
   * id of the input element.
   */
  id?: string;
  /**
   * Value of the input element.
   */
  value: string;
  /**
   * handler to run when the value on the input has changed.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * placeholder to show when there is no text in the input.
   */
  placeholder?: string;
  /**
   * flag that indicates whether the input should be disabled or not.
   */
  isDisabled?: boolean;
  /**
   * type of the input element.
   */
  type?: React.HTMLInputTypeAttribute;
  /**
   * label to show instead of the placeholder for supporting animation on focus.
   */
  label?: string;
  /**
   * isReadOnly flag to indicate whether the input is read only or not.
   */
  isReadOnly?: boolean;
  /**
   * Label to show when the input validation fails.
   */
  errorMessage?: string;
  /**
   * The maximum duration allowed for input type date and time.
   */
  maxValue?: number | string;
  /**
   * Event handler for when the input gains focus.
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Event handler for when the input loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
