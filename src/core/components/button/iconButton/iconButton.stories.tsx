import Icons, { IconProps } from "@icons";
import { Meta, StoryFn } from "@storybook/react";
import { IconButtonComponentProps } from "../button.types";
import IconButton from "./iconButton";

interface Map {
  [key: string]: React.FC<IconProps>;
}
const IconsMapped: Map = Icons;
const iconOptions = [...Object.keys(IconsMapped)];

export default {
  title: "Components/Button",
  component: IconButton,
  argTypes: {
    icon: {
      control: { type: "select" },
      defaultValue: iconOptions[0],
      mapping: IconsMapped,
      options: iconOptions,
    },
    size: {
      defaultValue: "small",
    },
  },
} as Meta;

const Template: StoryFn<IconButtonComponentProps> = ({ ...args }) => {
  return <IconButton {...args} />;
};

export const IconButtonComponent = Template.bind({});
IconButtonComponent.args = {
  icon: iconOptions[0],
};
IconButtonComponent.storyName = "Icon Button";
