import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import PrimaryToggle from "./primaryToggle";
import { PrimaryToggleProps, SelectionType } from "../toggle.types";

export default {
  title: "Components/Toggles",
  component: PrimaryToggle,
} as Meta;

const Template: StoryFn<PrimaryToggleProps> = (props) => {
  const [isChecked, setIsChecked] = useState(!!props.isChecked);

  return <PrimaryToggle {...props} isChecked={isChecked} onChange={() => setIsChecked((isChecked) => !isChecked)} />;
};

export const PrimaryToggleStory = Template.bind({});
PrimaryToggleStory.storyName = "Primary Toggle";
PrimaryToggleStory.argTypes = {
  label: {
    control: { type: "string" },
    defaultValue: "Edwin Eagle",
  },
  id: {
    control: { type: "string" },
    defaultValue: "personId",
  },
  name: {
    control: { type: "string" },
    defaultValue: "nameValue",
  },
  selectionType: {
    control: {
      type: "select",
      options: Object.values(SelectionType),
    },
  },
};
