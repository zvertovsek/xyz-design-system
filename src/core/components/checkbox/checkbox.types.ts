export interface CheckboxProps {
  /**
   * Label shown next to the checkbox.
   */
  label: string;
  /**
   * Id of the checkbox.
   */
  id?: string;
  /**
   * Name of the checkbox.
   */
  name?: string;
  /**
   * Flag that indicates whether the checkbox is selected.
   */
  isChecked?: boolean;
  /**
   * Flag that indicates whether the checkbox has children already selected.
   */
  hasChildrenChecked?: boolean;
  /**
   * Flag that indicates whether the checkbox is disabled.
   */
  isDisabled?: boolean;
  /**
   * Handler that gets executed when clicking on the checkbox.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
