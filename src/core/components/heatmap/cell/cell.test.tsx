import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import { CellProps } from "./cell.types";
import Cell from "./cell";
import userEvent from "@testing-library/user-event";
import Icons from "@icons";

const PROPS: CellProps = {
  label: "1%",
  backgroundColor: "white",
  justifyContent: "center",
  color: "black",
  onClick: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<Cell {...props} />);

  return {
    container: screen.getByTestId("heatmap-cell_container"),
    text: screen.getByTestId("heatmap-cell_text"),
  };
};

describe("HeatMap / cell", () => {
  it("renders component", async () => {
    const { container, text } = setup();

    expect(text).toHaveTextContent("1%");
    await userEvent.click(container);
    expect(PROPS.onClick).toBeCalled();
  });

  it("renders cell with no data", () => {
    const { text } = setup({ ...PROPS, label: undefined });

    expect(text).toHaveTextContent("no data");
  });

  it("renders icon", () => {
    setup({ ...PROPS, icon: Icons.TrendDownIcon });

    expect(screen.getByTestId("TrendDown")).toBeInTheDocument();
  });
});
