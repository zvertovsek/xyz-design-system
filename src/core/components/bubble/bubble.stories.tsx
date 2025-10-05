import { Meta, StoryFn } from "@storybook/react";

import Bubble from "./bubble";
import { BubbleProps } from "./bubble.types";

export default {
  title: "Components/Bubble",
  component: Bubble,
  argTypes: {
    alignment: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
  },
} as Meta;

const Template: StoryFn<BubbleProps> = ({ children, ...props }) => {
  return (
    <Bubble {...props} onPlay={(secs) => console.log(secs)} active>
      {children}
    </Bubble>
  );
};

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  startTime: "1000.6",
  displayName: "Firstname Lastname",
};
Default.storyName = "Bubble";
