import { Meta, StoryFn } from "@storybook/react";
import Banner from "./banner";
import { BannerProps, BannerType } from "./banner.types";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["aiInteraction", "userInteraction", "unset"] as BannerType[],
      },
    },
    children: {
      control: "text",
    },
  },
} as Meta;

export const Default: StoryFn<BannerProps> = ({ type, children }) => {
  return <Banner type={type}>{children}</Banner>;
};

Default.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  type: "aiInteraction",
};
Default.storyName = "Banner";
