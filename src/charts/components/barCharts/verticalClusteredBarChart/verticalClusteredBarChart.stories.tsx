import { TooltipProvider, useTooltip } from "@core/components";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ClusteredBarChartProps } from "../barCharts.types";
import ClusteredVerticalChartBar from "./verticalClusteredBarChart";

const ChartGallery: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ width: "600px" }}>{children}</div>
);

export default {
  title: "Charts/Bar Charts",
  component: ClusteredVerticalChartBar,
} as Meta;

export const VerticalClusteredBarChart: StoryFn<ClusteredBarChartProps> = (args) => (
  <>
    <TooltipProvider>
      <BarChart {...args} />
    </TooltipProvider>
  </>
);

const BarChart: StoryFn<ClusteredBarChartProps> = (args) => {
  const { showTooltip } = useTooltip();

  return (
    <ChartGallery>
      <ClusteredVerticalChartBar
        {...args}
        onHoverBar={(e, data) => data.description && showTooltip(data.description)(e)}
        onClickBar={(datum, index) => console.log(datum, index)}
      />
    </ChartGallery>
  );
};

VerticalClusteredBarChart.args = {
  data: [
    {
      key: "1",
      label: "Jan",
      clusterNodes: [
        {
          values: [20, 43, 19],
          shadowValue: 100,
          description: "Jan 1",
        },
        {
          values: [40, 0, 59],
          shadowValue: 100,
          description: "Jan 2",
        },
      ],
    },
    {
      key: "2",
      label: "Feb",
      clusterNodes: [
        {
          values: [12, 35, 30],
          description: "Feb 1",
        },
        {
          values: [],
          description: "Feb 2",
        },
      ],
    },
    {
      key: "3",
      label: "Mar",
      clusterNodes: [
        {
          values: [],
          description: "Operations 3\n 8 Mar - 8 Apr: 65% failed\n 8 Feb - 7 Mar: 71% failed",
        },
        {
          values: [14, 48, 34],
          description: "Operations 22",
        },
      ],
    },
    {
      key: "4",
      label: "Apr",
      clusterNodes: [
        {
          values: [3, 59, 13],
          description: "Apr",
        },
        {
          values: [12, 23, 0],
        },
      ],
    },
  ],
  config: [
    [
      { index: 1, label: "Complaints identified", color: "#EB3D80" },
      { index: 0, label: "Complaints raised", color: "#AC0D5C" },
      { index: 2, label: "Complaints raised", color: "green" },
    ],
    [
      { index: 1, label: "Complaints identified", color: "#747CA1" },
      { index: 0, label: "Complaints raised", color: "#2E3651" },
      { index: 2, label: "Complaints raised", color: "blue" },
    ],
  ],
  settings: {
    displayShadowValues: true,
    axisYConfig: {
      label: "",
      unit: "percentage",
    },
  },
};

VerticalClusteredBarChart.storyName = "Vertical Clustered Bar Chart";
