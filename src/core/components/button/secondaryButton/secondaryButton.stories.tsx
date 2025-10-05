import { Meta, StoryFn } from "@storybook/react";
import { ButtonComponentProps } from "../button.types";
import SecondaryButton from "./secondaryButton";

export default {
  title: "Components/Button",
  component: SecondaryButton,
} as Meta;

const Template: StoryFn<ButtonComponentProps> = (args) => {
  return <SecondaryButton {...args} />;
};

export const SecondaryButtonComponent = Template.bind({});
SecondaryButtonComponent.args = {
  label: "Secondary Button",
};
SecondaryButtonComponent.storyName = "Secondary Button";
