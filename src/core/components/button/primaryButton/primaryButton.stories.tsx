import { Meta, StoryFn } from "@storybook/react";
import { ButtonComponentProps } from "../button.types";
import PrimaryButton from "./primaryButton";

export default {
  title: "Components/Button",
  component: PrimaryButton,
} as Meta;

const Template: StoryFn<ButtonComponentProps> = (args) => {
  return <PrimaryButton {...args} />;
};

export const PrimaryButtonComponent = Template.bind({});
PrimaryButtonComponent.args = {
  label: "Primary Button",
};
PrimaryButtonComponent.storyName = "Primary Button";
