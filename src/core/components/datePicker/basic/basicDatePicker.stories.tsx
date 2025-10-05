import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import BasicDatePicker from "./basicDatePicker";
import { BasicDatePickerProps } from "./basicDatePicker.types";
import { ContainerPicker } from "../datePicker.styles";

export default {
  title: "Components/Date Picker",
  component: BasicDatePicker,
} as Meta;

const Template: StoryFn<BasicDatePickerProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(props.selectedDate || null);

  return (
    <ContainerPicker>
      <BasicDatePicker {...props} selectedDate={selectedDate} onChange={(date: Date) => setSelectedDate(date)} />
    </ContainerPicker>
  );
};

export const BDatePicker = Template.bind({});

BDatePicker.args = {
  selectedDate: new Date(),
  placeholder: "DD/MM/YYYY",
};
BDatePicker.storyName = "Basic Date Picker";
