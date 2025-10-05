import Icons, { IconProps } from "@icons";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonVariant, CommonButtonComponentProps } from "../button.types";
import CommonButton from "./commonButton";

interface Map {
  [key: string]: React.FC<IconProps>;
}
const IconsMapped: Map = Icons;
const iconOptions = [...Object.keys(IconsMapped)];

export default {
  title: "Components/Button",
  component: CommonButton,
  argTypes: {
    icon: {
      control: { type: "select" },
      mapping: IconsMapped,
      options: iconOptions,
    },
    size: {
      defaultValue: "small",
    },
  },
} as Meta;

const Template: StoryFn<CommonButtonComponentProps> = ({ ...args }) => {
  return <CommonButton {...args} />;
};

export const CommonButtonComponent = Template.bind({});
CommonButtonComponent.args = { label: "Default Label", variant: ButtonVariant.CommonDark };
CommonButtonComponent.storyName = "Common Button";
