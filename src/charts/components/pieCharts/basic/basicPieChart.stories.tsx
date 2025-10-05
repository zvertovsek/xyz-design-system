import {
  ReportContainer,
  ReportDescription,
  ReportHeading,
  ReportSideInfoPanel,
  ReportSideInfoPanelItem,
  ReportTitle,
  ReportWrapper,
} from "@charts/containers";
import { TooltipProvider, useTooltip } from "@core/components";
import { Meta, StoryFn } from "@storybook/react";
import { PieChartProps } from "../pieCharts.types";
import BasicPieChart from "./basicPieChart";

export default {
  title: "Charts/Pie Charts",
  component: BasicPieChart,
} as Meta;

const App: StoryFn<PieChartProps> = (args) => (
  <>
    <TooltipProvider>
      <Template {...args} />
    </TooltipProvider>
  </>
);

const Template: StoryFn<PieChartProps> = (args) => {
  const { showTooltip } = useTooltip();

  return (
    <>
      <ReportHeading>
        <ReportTitle>Which team failed Risk & Compliance requirement?</ReportTitle>
        <ReportDescription>
          Percentage of assessed cases which didn't meet the required threshold of Risk & Compliance requirements, by
          team. Cases from the last 6 months are charted.
        </ReportDescription>
      </ReportHeading>
      <ReportWrapper hasSideInformationPanel>
        <ReportContainer height={400} width={400}>
          <BasicPieChart {...args} onHoverSlice={(e, data) => data.description && showTooltip(data.description)(e)} />
        </ReportContainer>
        <ReportSideInfoPanel>
          {args.data.map((item) => (
            <ReportSideInfoPanelItem key={item.key} color={item.color}>
              {item.label}
            </ReportSideInfoPanelItem>
          ))}
        </ReportSideInfoPanel>
      </ReportWrapper>
    </>
  );
};

export const BasicChart = App.bind({});

BasicChart.args = {
  data: [
    { key: "1", label: "General enquiry", color: "#B8E4F6", value: 80, description: "General enquiry" },
    { key: "2", label: "Sales", color: "#451F75", value: 12, description: "Sales" },
    { key: "3", label: "Incident", color: "#6AC0E8", value: 23, description: "Incident" },
    { key: "4", label: "Moving house", color: "#3F86BC", value: 13, description: "Moving house" },
    { key: "5", label: "General enquiry", color: "red", value: 80, description: "General enquiry" },
  ],
};

BasicChart.storyName = "Basic Pie Chart";
