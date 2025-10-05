import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { defaultTheme } from "@theme/default";
import Trend from "./trend";
import { TrendComponentProps } from "./trend.types";

const PROPS: TrendComponentProps = {
  severity: "positive",
  label: "this month",
  forelabel: "Sales or Complaints",
  direction: "up",
  onClickHandler: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<Trend {...props} />);

  return {
    trendUpIcon: screen.queryByTestId("TrendUp"),
    trendDownIcon: screen.queryByTestId("TrendDown"),
    trendFlatIcon: screen.queryByTestId("TrendFlat"),
    label: screen.getByText("this month"),
    forelabel: screen.getByText("Sales or Complaints"),
  };
};

describe("Trend", () => {
  it("should render component", () => {
    const trend = setup();

    expect(trend).toBeDefined();
  });

  it("is rendered with text", () => {
    const trend = setup();

    expect(trend.label).toBeInTheDocument();
    expect(trend.forelabel).toBeInTheDocument();

    expect(trend.label.textContent).toContain(PROPS.label);
    expect(trend.forelabel.textContent).toContain(PROPS.forelabel);
  });

  it("is rendered with correct colour for severity: positive", () => {
    const trend = setup();

    expect(trend.trendUpIcon).toBeInTheDocument();
    expect(trend.trendUpIcon?.firstChild).toHaveStyle("fill:" + defaultTheme.colorPalettes.rag.success[200]);
  });

  it("is rendered with correct colour for severity: negative", () => {
    const trend = setup({ ...PROPS, severity: "negative" });

    expect(trend.trendUpIcon).toBeInTheDocument();
    expect(trend.trendUpIcon?.firstChild).toHaveStyle("fill:" + defaultTheme.colorPalettes.rag.danger[600]);
  });

  it("is rendered with correct colour for severity :flat", () => {
    const trend = setup({ ...PROPS, severity: "flat" });

    expect(trend.trendUpIcon).toBeInTheDocument();
    expect(trend.trendUpIcon?.firstChild).toHaveStyle("fill:" + defaultTheme.colorPalettes.primary.default[500]);
  });

  it("is rendered with correct direction Up", () => {
    const trend = setup();

    expect(trend.trendUpIcon).toBeInTheDocument();
    expect(trend.trendDownIcon).not.toBeInTheDocument();
    expect(trend.trendFlatIcon).not.toBeInTheDocument();
  });

  it("is rendered with correct direction Down", () => {
    const trend = setup({ ...PROPS, direction: "down" });

    expect(trend.trendUpIcon).not.toBeInTheDocument();
    expect(trend.trendDownIcon).toBeInTheDocument();
    expect(trend.trendFlatIcon).not.toBeInTheDocument();
  });

  it("is rendered with correct direction Flat", () => {
    const trend = setup();

    expect(trend.trendUpIcon).toBeInTheDocument();
    expect(trend.trendDownIcon).not.toBeInTheDocument();
    expect(trend.trendFlatIcon).not.toBeInTheDocument();
  });

  it("calls handler on click", async () => {
    const trend = setup();
    await userEvent.click(trend.label);
    expect(PROPS.onClickHandler).toHaveBeenCalled();
  });
});
