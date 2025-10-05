import { DatePickerProps } from "../datePicker.types";

export interface BasicDatePickerProps extends DatePickerProps {
  /**
   * Date to be selected in the date picker.
   */
  selectedDate: Date | null;
  /**
   * handler to be called when a new date gets selected.
   */
  onChange: (newDate: Date) => void;
}
