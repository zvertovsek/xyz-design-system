import { Meta, StoryFn } from "@storybook/react";

import LinearGauge from "./linearGauge";
import { LinearGaugeRootContainer } from "./linearGauge.styles";
import { LinearGaugeProps } from "./linearGauge.types";

export default {
  title: "Components/LinearGauge",
  component: LinearGauge,
} as Meta;

export const Default: StoryFn<LinearGaugeProps> = (props) => {
  return (
    <LinearGaugeRootContainer>
      <LinearGauge {...props}></LinearGauge>
    </LinearGaugeRootContainer>
  );
};

Default.storyName = "Linear Gauge";
Default.args = {
  value: 50,
  max: 100,
};
