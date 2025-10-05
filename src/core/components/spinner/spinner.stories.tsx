import { Meta, StoryFn } from "@storybook/react";

import Spinner from "./spinner";
import { SpinnerProps, SpinnerSize } from "./spinner.types";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: [SpinnerSize.xs, SpinnerSize.sm, SpinnerSize.md, SpinnerSize.lg, SpinnerSize.xl],
      },
    },
  },
} as Meta;

export const Default: StoryFn<SpinnerProps> = (args) => (
  <div style={{ width: "600px", height: "300px" }}>
    <Spinner {...args} />
  </div>
);

Default.args = {
  size: SpinnerSize.sm,
};
Default.storyName = "Spinner";
