import { TooltipProvider, useTooltip } from "@core/components";
import { Meta, StoryFn } from "@storybook/react";
import React, { SyntheticEvent } from "react";
import { LineChartProps, ParsedDataNode, RangeGroupDataNode } from "../lineCharts.types";
import BasicLineChart from "./basicLineChart";

const ChartGallery: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ width: "600px" }}>{children}</div>
);

export default {
  title: "Charts/Line Charts",
  component: BasicLineChart,
} as Meta;

const App: StoryFn<LineChartProps> = (args) => (
  <>
    <TooltipProvider>
      <Template {...args} />
    </TooltipProvider>
  </>
);

const Template: StoryFn<LineChartProps> = (args) => {
  const { showTooltip } = useTooltip();
  const onHover = (e: SyntheticEvent, data: ParsedDataNode | RangeGroupDataNode) => {
    data.description && showTooltip(data.description)(e);
  };

  return (
    <ChartGallery>
      <BasicLineChart {...args} onHoverDataPoint={onHover} />
    </ChartGallery>
  );
};

export const BasicChart = App.bind({});

BasicChart.args = {
  name: "basicLineChart",
  data: [
    {
      key: "0",
      label: "2022-04-23",
      values: [10, 15, 5],
      description: "2022-04-23",
    },
    {
      key: "1",
      label: "2022-04-30",
      values: [0, null, 8],
      description: "2022-04-30",
    },
    {
      key: "2",
      label: "2022-05-07",
      values: [9, 6, 3],
      description: "2022-05-07",
    },
    {
      key: "3",
      label: "2022-05-14",
      values: [13, 13, null],
      description: "2022-05-14",
    },
    {
      key: "4",
      label: "2022-05-21",
      values: [5, 4, 2],
      description: "2022-05-21",
    },
    {
      key: "5",
      label: "2022-05-28",
      values: [8, 12, 6],
      description: "2022-05-28",
    },
    {
      key: "6",
      label: "2022-06-04",
      values: [2, 9, 9],
      description: "2022-06-04",
    },
    {
      key: "7",
      label: "2022-06-11",
      values: [11, 9, 13],
      description: "2022-06-11",
    },
    {
      key: "8",
      label: "2022-06-18",
      values: [0, 50, 12],
      description: "2022-06-18",
    },
    {
      key: "9",
      label: "2022-06-25",
      values: [12, null, 12],
      description: "2022-06-25",
    },
    {
      key: "10",
      label: "2022-07-02",
      values: [0, 0, 0],
      description: "2022-07-02",
    },
    {
      key: "11",
      label: "2022-07-09",
      values: [0, 0, 0],
      description: "2022-07-09",
    },
    {
      key: "12",
      label: "2022-07-16",
      values: [0, 0, 50],
      description: "2022-07-16",
    },
    {
      key: "13",
      label: "2022-07-23",
      values: [34, 34, 0],
      description: "2022-07-23",
    },
    {
      key: "14",
      label: "2022-07-30",
      values: [0, 0, 0],
      description: "2022-07-30",
    },
    {
      key: "15",
      label: "2022-08-06",
      values: [0, 0, 0],
      description: "2022-08-06",
    },
    {
      key: "16",
      label: "2022-08-13",
      values: [0, 0, 0],
      description: "2022-08-13",
    },
    {
      key: "17",
      label: "2022-08-20",
      values: [12, 34, 50],
      description: "2022-08-20",
    },
    {
      key: "18",
      label: "2022-08-27",
      values: [100, 50, 0],
      description: "2022-08-27",
    },
    {
      key: "19",
      label: "2022-09-03",
      values: [null, 25, 0],
      description: "2022-09-03",
    },
    {
      key: "20",
      label: "2022-09-10",
      values: [0, 0, 0],
      description: "2022-09-10",
    },
    {
      key: "21",
      label: "2022-09-17",
      values: [0, 0, 0],
      description: "2022-09-17",
    },
  ],
  rangeGroups: [
    {
      key: "1",
      x1: "2022-04-23",
      x2: "2022-05-23",
      description: "Show some large portion of data",
    },
    {
      key: "2",
      x1: "2022-05-23",
      x2: "2022-06-23",
      description: "Show some large portion of data",
    },
    {
      key: "3",
      x1: "2022-06-23",
      x2: "2022-07-23",
      description: "Show some large portion of data",
    },
    {
      key: "4",
      x1: "2022-07-23",
      x2: "2022-08-23",
      description: "Show some large portion of data",
    },
    {
      key: "5",
      x1: "2022-08-23",
      x2: "2022-09-23",
      description: "23 Aug - 23 Sep\n expresions of disatisfaction: 234\n Complaints: 34",
    },
  ],
  config: [
    {
      color: "#870A53",
      index: 0,
      label: "Customer Experience",
    },
    {
      color: "#2E3651",
      index: 1,
      label: "Risk & Compliance",
    },
    {
      color: "#C21060",
      index: 2,
      label: "Sales & Revenue",
    },
  ],
  settings: { timespan: "6M", axisYConfig: { label: "", unit: "percentage" } },
};
BasicChart.storyName = "Basic Line Chart";
