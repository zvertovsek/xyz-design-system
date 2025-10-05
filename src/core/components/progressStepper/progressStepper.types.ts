export interface ProgressStepperProps {
  /**
   * An array of step objects excluding 'handleClick' and 'stepNumber'
   */
  items: Omit<StepProps, "handleClick" | "stepNumber" | "isSelected">[];
  /**
   * Key of the currently selected step
   */
  selectedItem: string;
  /**
   * Callback triggered when a step is clicked
   */
  onChangeHandler?: (key: string) => void;
}

export interface StepProps {
  /**
   * Label displayed for the step
   */
  label: string;
  /**
   * Indicates whether the step is currently selected
   */
  //
  isSelected?: boolean;
  /**
   * Indicates whether the step is completed
   */
  isCompleted?: boolean;
  /**
   * Indicates whether the step can be selected
   */
  isDisabled?: boolean;
  /**
   * Callback triggered when the step is clicked
   */
  handleClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Unique key identifier
   */
  key: string;
  /**
   * Number representing step position in sequence
   */
  stepNumber: number;
}
