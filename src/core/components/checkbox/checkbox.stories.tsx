import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import Checkbox from "./checkbox";
import { CheckboxProps } from "./checkbox.types";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

export const Default: StoryFn<CheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = useState(!!props.isChecked);

  return <Checkbox {...props} isChecked={isChecked} onChange={() => setIsChecked((isChecked) => !isChecked)} />;
};

Default.args = {
  label: "Edwin Eagle",
  id: "personId",
  name: "nameValue",
};
Default.storyName = "Checkbox";
