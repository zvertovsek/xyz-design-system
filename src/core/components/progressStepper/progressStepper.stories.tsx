import { Meta, StoryFn } from "@storybook/react";
import ProgressStepper from "./progressStepper";
import { ProgressStepperProps, StepProps } from "./progressStepper.types";
import { useState } from "react";

export default {
  title: "Components/ProgressStepper",
  component: ProgressStepper,
} as Meta;

const steps: StepProps[] = [
  {
    label: "Select Case Type",
    isCompleted: true,
    isDisabled: false,
    key: "1",
    stepNumber: 1,
  },
  {
    label: "Upload Documents",
    isDisabled: false,
    isCompleted: false,
    key: "2",
    stepNumber: 2,
  },
  {
    label: "Enter metadata",
    isDisabled: true,
    key: "3",
    stepNumber: 3,
  },
  {
    label: "Confirm details",
    isDisabled: true,
    key: "4",
    stepNumber: 4,
  },
];

export const Default: StoryFn<ProgressStepperProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<string>("1");

  const handleChange = (key: string) => {
    setSelectedItem(key);
  };

  return (
    <div>
      <ProgressStepper {...args} onChangeHandler={handleChange} selectedItem={selectedItem} />
    </div>
  );
};

Default.args = {
  items: steps,
};

Default.storyName = "ProgressStepper";
