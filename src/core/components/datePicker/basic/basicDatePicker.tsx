import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInputProps } from "../datePicker.types";
import Icons, { IconSize } from "@icons";
import { BasicDatePickerProps } from "./basicDatePicker.types";
import { CustomInputWrapper, Input } from "../datePicker.styles";
import dateParserUtility from "@utils/dateParser";

export const BasicDatePicker: React.FC<BasicDatePickerProps> = ({
  selectedDate,
  dateFormat = "dd/MM/yyyy",
  onChange,
  placeholder,
  isDisabled = false,
}) => {
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
          />
          <Icons.CalendarIcon size={IconSize.sm} />
        </CustomInputWrapper>
      );
    },
  );

  return (
    <DatePicker
      dateFormat={dateFormat}
      selected={selectedDate}
      onChange={onChange}
      placeholderText={placeholder}
      disabled={isDisabled}
      customInput={<CustomInput />}
      showPopperArrow={false}
      todayButton="Today"
      onChangeRaw={(e) => {
        const date = dateParserUtility.parse(e.target.value, dateFormat);

        if (dateParserUtility.isValid(date)) {
          onChange(date);
        }
      }}
    />
  );
};

export default BasicDatePicker;
