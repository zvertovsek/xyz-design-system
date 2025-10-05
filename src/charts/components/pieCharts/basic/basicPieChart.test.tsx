import { render, screen } from "@testing-library/react";
import { PieChartProps } from "../pieCharts.types";
import BasicPieChart from "./basicPieChart";

const PROPS: PieChartProps = {
  data: [
    { key: "1", label: "General enquiry", color: "#B8E4F6", value: 80 },
    { key: "2", label: "Sales", color: "#451F75", value: 12 },
    { key: "3", label: "Incident", color: "#6AC0E8", value: 23 },
    { key: "4", label: "Moving house", color: "#3F86BC", value: 13 },
  ],
};

const renderBasicPieChart = (props = PROPS) => {
  render(<BasicPieChart {...props} />);

  return {
    arcs: screen.getAllByTestId("arc"),
  };
};

describe("Basic Pie Chart", () => {
  it("renders arcs", () => {
    const { arcs } = renderBasicPieChart();
    expect(arcs).toHaveLength(4);
  });
});
