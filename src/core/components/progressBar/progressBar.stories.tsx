import { Meta, StoryFn } from "@storybook/react";
import ProgressBar from "./progressBar";
import { ProgressBarProps } from "./progressBar.types";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {},
} as Meta;

const Template: StoryFn<ProgressBarProps> = (props) => {
  return <ProgressBar {...props} onChange={() => null} />;
};

export const Default = Template.bind({});
Default.args = {
  totalTime: 5,
};
Default.storyName = "Default ProgressBar";
