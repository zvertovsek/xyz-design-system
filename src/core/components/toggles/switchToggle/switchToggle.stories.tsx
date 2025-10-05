import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import SwitchToggle from "./switchToggle";
import { SwitchToggleProps } from "../toggle.types";

export default {
  title: "Components/Toggles",
  component: SwitchToggle,
} as Meta;

const Template: StoryFn<SwitchToggleProps> = (props) => {
  const [checked, setChecked] = useState(props.isChecked);
  return <SwitchToggle {...props} onChange={(ev) => setChecked(ev.target.checked)} isChecked={checked} />;
};

export const SwitchToggleStory = Template.bind({});
SwitchToggleStory.storyName = "Switch Toggle";
SwitchToggleStory.argTypes = {
  isChecked: {
    control: { type: "boolean" },
    defaultValue: true,
  },
  isDisabled: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  label: {
    control: { type: "string" },
    defaultValue: "test",
  },
  labelAlignment: {
    control: { type: "select" },
    defaultValue: "left",
    options: ["left", "right"],
  },
};
