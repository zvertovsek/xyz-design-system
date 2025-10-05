import { Meta, StoryFn } from "@storybook/react";
import { ButtonComponentProps } from "../button.types";
import TextButton from "./textButton";

export default {
  title: "Components/Button",
  component: TextButton,
} as Meta;

const Template: StoryFn<ButtonComponentProps> = (args) => {
  return <TextButton {...args} />;
};

export const TextButtonComponent = Template.bind({});
TextButtonComponent.args = {
  label: "Text only button",
};
TextButtonComponent.storyName = "Text Button";
