import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import RangeDatePicker from "./rangeDatePicker";
import { RangeDate, RangeDatePickerProps } from "./rangeDatePicker.types";
import { ContainerPicker } from "../datePicker.styles";

export default {
  title: "Components/Date Picker",
  component: RangeDatePicker,
} as Meta;

const Template: StoryFn<RangeDatePickerProps> = (props) => {
  const [selectedDates, setSelectedDates] = useState<RangeDate>(props.selectedDates || null);

  return (
    <ContainerPicker>
      <RangeDatePicker {...props} selectedDates={selectedDates} onChange={setSelectedDates} />
    </ContainerPicker>
  );
};

export const RDatePicker = Template.bind({});

RDatePicker.args = {
  selectedDates: [null, null],
  placeholder: "DD/MM/YYYY  -  DD/MM/YYYY",
};
RDatePicker.storyName = "Range Date Picker";
