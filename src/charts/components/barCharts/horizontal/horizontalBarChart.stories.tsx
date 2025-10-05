import { TooltipProvider, useTooltip } from "@core/components";
import { Meta, StoryFn } from "@storybook/react";
import { BarChartProps } from "../barCharts.types";
import StackedHorizontalBarChart from "./horizontalBarChart";

const ChartGallery: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ width: "600px" }}>{children}</div>
);

export default {
  title: "Charts/Bar Charts",
  component: StackedHorizontalBarChart,
} as Meta;

const App: StoryFn<BarChartProps> = (args) => (
  <>
    <TooltipProvider>
      <Template {...args} />
    </TooltipProvider>
  </>
);

const Template: StoryFn<BarChartProps> = (args) => {
  const { showTooltip } = useTooltip();

  return (
    <ChartGallery>
      <StackedHorizontalBarChart
        {...args}
        onHoverBar={(e, data) => data.description && showTooltip(data.description)(e)}
      />
    </ChartGallery>
  );
};

export const HorizontalBarChart = App.bind({});

HorizontalBarChart.args = {
  data: [
    { key: "1", label: "Operations 1", values: [5, 5], shadowValues: [15], description: "Operations 1" },
    { key: "2", label: "Billing 2", values: [0, 14], shadowValues: [54], description: "Billing 2" },
    {
      key: "3",
      label: "Operations 3",
      values: [26, 5],
      shadowValues: [36],
      description: "Operations 3\n 8 Mar - 8 Apr: 65% failed\n 8 Feb - 7 Mar: 71% failed",
    },
    { key: "4", label: "Operations 2", values: [70, 13], shadowValues: [100], description: "Operations 2" },
    { key: "5", label: "Sales", values: [105, 97, 45], description: "Sales" },
    { key: "6", label: "CS", values: [0, 0, 0], description: "CS" },
    { key: "7", label: "Operations 1", values: [58, 45, 4], description: "Operations 1" },
    { key: "8", label: "Billing 2", values: [210, 145, 76], description: "Billing 2" },
    { key: "9", label: "Operations 3", values: [], description: "Operations 3" },
    { key: "10", label: "Operations 2", values: [132, 79, 23], description: "Operations 2" },
    { key: "11", label: "Sales", values: [136, 45, 12], description: "Sales" },
    { key: "12", label: "CS", values: [154, 80, 26], description: "CS" },
  ],
  config: [
    { index: 0, label: "Expressions of dissatisfaction identified", color: "#2F5684" },
    { index: 1, label: "Complaints identified", color: "#4DA6DE" },
    { index: 2, label: "Complaints raised", color: "red" },
  ],
  settings: {
    displayShadowValues: true,
    axisXConfig: {
      label: "% of calls",
      unit: "percentage",
    },
  },
};

HorizontalBarChart.storyName = "Horizontal Bar Chart";
