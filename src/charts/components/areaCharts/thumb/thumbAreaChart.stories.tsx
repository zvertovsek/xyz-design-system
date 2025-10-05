import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ThumbChartProps } from "../areaCharts.types";
import ThumbAreaChart from "./thumbAreaChart";

const ChartGallery: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ width: "200px", height: "100px" }}>{children}</div>
);

export default {
  title: "Charts/Area Charts",
  component: ThumbAreaChart,
} as Meta;

const Template: StoryFn<ThumbChartProps> = (args) => (
  <ChartGallery>
    <ThumbAreaChart {...args} />
  </ChartGallery>
);

export const ThumbChart = Template.bind({});

ThumbChart.args = {
  name: "thumbAreaChart",
  data: [
    { key: "1", label: "2022-05-01", values: [80] },
    { key: "2", label: "2022-05-02", values: [12] },
    { key: "3", label: "2022-05-03", values: [23] },
    { key: "4", label: "2022-05-04", values: [13] },
    { key: "5", label: "2022-05-05", values: [45] },
    { key: "6", label: "2022-05-06", values: [54] },
    { key: "7", label: "2022-05-07", values: [4] },
    { key: "8", label: "2022-05-08", values: [76] },
  ],
  config: [{ index: 0, label: "", color: "#059669" }],
};

ThumbChart.storyName = "Thumb Area Chart";
