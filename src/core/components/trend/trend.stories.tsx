import { Meta, StoryFn } from "@storybook/react";

import { TrendComponentProps } from "./trend.types";
import Trend from "./trend";

export default {
  title: "Components/Trend",
  component: Trend,
} as Meta;

export const Default: StoryFn<TrendComponentProps> = (props) => {
  return <Trend {...props}></Trend>;
};

Default.storyName = "Trend";
Default.args = {
  severity: "positive",
  direction: "down",
  forelabel: "Complaints",
  label: "20% this month",
  onClickHandler: () => null,
};
