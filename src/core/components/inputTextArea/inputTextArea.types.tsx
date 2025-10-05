export interface InputTextAreaProps {
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
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * placeholder to show when there is no text in the input.
   */
  placeholder?: string;
  /**
   * flag that indicates whether the input should be disabled or not.
   */
  isDisabled?: boolean;
  /**
   * label to show instead of the placeholder for supporting animation on focus.
   */
  label?: string;
  /**
   * value to show the height of the component in rows.
   */
  rows: number;
  /**
   * value to show how wide the component is in columns.
   */
  cols?: number;
  /**
   * flag that indicates whether the area should be resizable or not.
   */
  isResizable?: boolean;
  /**
   * flag that indicates whether the text area is a required input or not.
   */
  isRequired?: boolean;
  /**
   * maximum character length value.
   */
  maxLength?: number;
  /**
   * minimum character length value.
   */
  minLength: number;
  /**
   * flag to indicate whether the input is invalid or not.
   */
  isInvalid?: boolean;
  /**
   * error text to indicate that the user has exceeded the character limit.
   */
  errorLabel?: string;
  /**
   * enum to indicate whether the text area colour should be based on dark or light backgrounds.
   */
  severity?: Severity;
}

export enum Severity {
  Light = "LIGHT",
  Dark = "DARK",
}
