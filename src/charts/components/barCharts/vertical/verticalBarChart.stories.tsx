import { TooltipProvider, useTooltip } from "@core/components";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { BarChartProps } from "../barCharts.types";
import StackedVerticalChartBar from "./verticalBarChart";

const ChartGallery: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ width: "600px" }}>{children}</div>
);

export default {
  title: "Charts/Bar Charts",
  component: StackedVerticalChartBar,
} as Meta;

export const VerticalBarChartComponent: StoryFn<BarChartProps> = (args) => (
  <>
    <TooltipProvider>
      <BarChart {...args} />
    </TooltipProvider>
  </>
);

const BarChart: StoryFn<BarChartProps> = (args) => {
  const { showTooltip } = useTooltip();

  return (
    <ChartGallery>
      <StackedVerticalChartBar
        {...args}
        onHoverBar={(e, data) => data.description && showTooltip(data.description)(e)}
      />
    </ChartGallery>
  );
};

VerticalBarChartComponent.args = {
  data: [
    { key: "1", label: "Jan", values: [8, 43, 19], shadowValues: [10], description: "Jan" },
    { key: "2", label: "Feb", values: [12, 35, 30], description: "Feb" },
    {
      key: "3",
      label: "Mar",
      values: [12, 18, 34],
      description: "Operations 3\n 8 Mar - 8 Apr: 65% failed\n 8 Feb - 7 Mar: 71% failed",
    },
    { key: "4", label: "Apr", values: [11, 9, 23], description: "Apr" },
    { key: "5", label: "May", values: [45, 23, 4], description: "May" },
    { key: "6", label: "Jun", values: [], description: "Jun" },
    { key: "7", label: "Jul", values: [24, 18, 34], description: "Jul" },
    { key: "8", label: "Aug", values: [76, 16], description: "Aug" },
  ],
  config: [
    { index: 2, label: "Expressions of dissatisfaction identified", color: "#E3F4FB" },
    { index: 1, label: "Complaints identified", color: "#4DA6DE" },
    { index: 0, label: "Complaints raised", color: "#2F5684" },
  ],
  settings: {
    displayShadowValues: true,
    axisYConfig: {
      label: "",
      unit: "percentage",
    },
  },
};

VerticalBarChartComponent.storyName = "Vertical Bar Chart";
