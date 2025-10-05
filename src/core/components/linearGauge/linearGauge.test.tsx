import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import { defaultTheme } from "@theme/default";
import { LinearGauge } from "./linearGauge";
import { LinearGaugeProps } from "./linearGauge.types";

const PROPS: LinearGaugeProps = {
  value: 25,
  max: 100,
  isHighlighted: false,
  text: "this month",
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<LinearGauge {...props} />);

  return {
    text: screen.getByText("this month"),
    linearBar: screen.queryByTestId("linear-bar"),
  };
};

describe("Linear Gauge", () => {
  it("should render component", () => {
    const { text, linearBar } = setup();

    expect(text).toBeDefined();
    expect(linearBar).toBeDefined();
  });

  it("is rendered with text", () => {
    const { text } = setup();

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("this month");
  });

  it("is rendered with the non-highlighted colour", () => {
    const { linearBar } = setup();

    expect(linearBar).toBeInTheDocument();
    expect(linearBar).toHaveStyle("background-color:" + defaultTheme.colorPalettes.primary.accent[600]);
  });

  it("is rendered with the highlighted colour", () => {
    const { linearBar } = setup({ ...PROPS, isHighlighted: true });

    expect(linearBar).toBeInTheDocument();
    expect(linearBar).toHaveStyle("background-color:" + defaultTheme.colorPalettes.primary.accent[900]);
  });
});
