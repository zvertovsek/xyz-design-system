import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import InputTextArea from "./inputTextArea";
import { InputTextAreaProps } from "./inputTextArea.types";

export default {
  title: "Components/InputTextArea",
  component: InputTextArea,
} as Meta;

export const Default: StoryFn<InputTextAreaProps> = (props) => {
  const [value, setValue] = useState<string>("");

  return <InputTextArea {...props} value={value} onChange={(e) => setValue(e.target.value)}></InputTextArea>;
};

Default.args = {
  label: "Description",
  placeholder: "Placeholder",
  rows: 2,
  errorLabel: "Too many characters",
};

Default.storyName = "InputTextArea";
