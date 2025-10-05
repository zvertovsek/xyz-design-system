import { Meta, StoryFn } from "@storybook/react";
import RangeSlider from "./rangeSlider";
import { RangeSliderViewModel } from "./rangeSlider.types";
import { flatten, unflatten } from "flat";
import { ComponentProps } from "@core/components/components.types";
import { useState } from "react";

export default {
  title: "Components/Slider",
  component: RangeSlider,
  argTypes: {
    vm: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: StoryFn<ComponentProps<RangeSliderViewModel>> = (props) => {
  const args: ComponentProps<RangeSliderViewModel> = unflatten(props);
  const [values, setValues] = useState<number[]>([args.vm.rangeSelected.start, args.vm.rangeSelected.end]);
  args.vm.rangeSelected = {
    start: values[0],
    end: values[1],
  };
  args.vm.onChange = (values) => {
    setValues(values);
  };

  return (
    <div style={{ width: "25rem" }}>
      <RangeSlider {...args} />
    </div>
  );
};

const args: RangeSliderViewModel = {
  range: {
    start: 0,
    end: 5,
  },
  rangeSelected: {
    start: 1,
    end: 3,
  },
  startLabel: "",
  endLabel: "",
  isReverse: false,
  onChange: () => null,
  marks: {
    0: "None",
    1: "Marginal",
    2: "Low",
    3: "Medium",
    4: "High",
    5: "Critical",
  },
};

Default.args = flatten({
  vm: args,
});
Default.storyName = "Range Slider";
