import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import RadioGroup from "./radioGroup";
import { RadioGroupProps, RadioOption } from "./radioGroup.types";

export default {
  title: "Components/Radio",
  component: RadioGroup,
} as Meta;

const radios: RadioOption[] = [
  {
    value: "1",
    label: "test 1",
  },
  {
    value: "2",
    label: "test 2",
    disabled: true,
  },
];

export const Default: StoryFn<RadioGroupProps> = ({ selected, options, ...props }) => {
  const [radioSelected, setRadioSelected] = useState(selected);

  const handleChange = (radio: RadioOption) => {
    setRadioSelected(radio.value);
  };

  return <RadioGroup {...props} options={options} selected={radioSelected} onChange={handleChange} />;
};

Default.args = {
  options: radios,
  selected: "2",
  name: "example",
};
Default.storyName = "Radio";
