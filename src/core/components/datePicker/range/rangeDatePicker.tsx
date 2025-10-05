import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInputProps } from "../datePicker.types";
import Icons, { IconSize } from "@icons";
import { RangeDatePickerProps } from "./rangeDatePicker.types";
import { CustomInputWrapper, Input } from "../datePicker.styles";
import dateParserUtility from "@utils/dateParser";

export const RangeDatePicker: React.FC<RangeDatePickerProps> = ({
  selectedDates: [startDate, endDate],
  dateFormat = "dd/MM/yyyy",
  onChange,
  placeholder,
  isDisabled = false,
}) => {
  const onChangeDateHandler = (dates: [Date | null, Date | null]) => {
    dates[1] && dates[1].setHours(23, 59, 59, 999);
    onChange(dates);
  };

  const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    ({ value, placeholder, onClick, disabled, onChange }, ref) => {
      return (
        <CustomInputWrapper>
          <Input
            ref={ref}
            type="text"
            value={value}
            onClick={onClick}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            data-testid="date-input"
          />
          <Icons.CalendarIcon size={IconSize.sm} />
        </CustomInputWrapper>
      );
    },
  );

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      dateFormat={dateFormat}
      onChange={onChangeDateHandler}
      placeholderText={placeholder}
      disabled={isDisabled}
      customInput={<CustomInput />}
      showPopperArrow={false}
      todayButton="Today"
      onChangeRaw={(e) => {
        const [date1, date2] = (e.target.value || "").split(" - ");
        const startDate = dateParserUtility.parse(date1, dateFormat);
        const endDate = dateParserUtility.parse(date2, dateFormat);

        if (dateParserUtility.isValid(startDate) && dateParserUtility.isValid(endDate)) {
          onChangeDateHandler([startDate, endDate]);
        }
      }}
    />
  );
};

export default RangeDatePicker;
