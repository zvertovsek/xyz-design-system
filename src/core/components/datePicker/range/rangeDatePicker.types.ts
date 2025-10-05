import { DatePickerProps } from "../datePicker.types";

export type RangeDate = [Date | null, Date | null];

export interface RangeDatePickerProps extends DatePickerProps {
  /**
   * Dates to be selected in the date picker.
   */
  selectedDates: RangeDate;
  /**
   * handler to be called when new dates get selected.
   */
  onChange: (newDates: RangeDate) => void;
}
