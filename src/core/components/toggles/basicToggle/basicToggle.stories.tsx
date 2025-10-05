import Icons, { IconProps } from "@icons";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import BasicToggle from "./basicToggle";
import { BasicToggleComponentProps } from "../toggle.types";

export default {
  title: "Components/Toggles",
  component: BasicToggle,
} as Meta;

const Template: StoryFn<BasicToggleComponentProps> = (props) => {
  const [isChecked, setIsChecked] = useState(!!props.isChecked);

  return <BasicToggle {...props} isChecked={isChecked} onChange={() => setIsChecked((isChecked) => !isChecked)} />;
};

export const Default = Template.bind({});
Default.storyName = "Basic Toggle";
Default.argTypes = {
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
};

interface Map {
  [key: string]: React.FC<IconProps>;
}

const IconsMapped: Map = { ...Icons, none: undefined };
const iconOptions = [...Object.keys(IconsMapped)];

export const IconToggle = Template.bind({});
IconToggle.storyName = "Icon Toggle";
IconToggle.argTypes = {
  label: {
    control: { type: "string" },
    defaultValue: "Edwin Eagle",
  },
  icon: {
    control: { type: "select" },
    defaultValue: iconOptions[0],
    mapping: IconsMapped,
    options: iconOptions,
  },
  id: {
    control: { type: "string" },
    defaultValue: "personId",
  },
  name: {
    control: { type: "string" },
    defaultValue: "nameValue",
  },
};
