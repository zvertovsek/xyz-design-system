import { Meta, StoryFn } from "@storybook/react";
import RangeToggleComponent from "./rangeToggle";
import { RangeOptionModel, RangeToggleComponentProps } from "./rangeToggle.types";

const options: RangeOptionModel[] = [
  { id: "1W", label: "1W" },
  { id: "1M", label: "1M" },
  { id: "6M", label: "6M" },
  { id: "1Y", label: "1Y" },
  { id: "3Y", label: "3Y" },
];

export default {
  title: "Components/Range",
  component: RangeToggleComponent,
} as Meta;

export const Default: StoryFn<RangeToggleComponentProps> = (args) => {
  return (
    <div style={{ width: "200px" }}>
      <RangeToggleComponent {...args} />
    </div>
  );
};

Default.args = {
  options,
  onSelect: (option: RangeOptionModel) => {
    console.log(option);
  },
  selectedOptionId: "6M",
  disabledOptionIds: ["1Y", "3Y"],
};
Default.storyName = "Toggle";
