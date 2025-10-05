import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import { ColumnHeaderProps } from "./columnHeader.types";
import ColumnHeader from "./columnHeader";
import userEvent from "@testing-library/user-event";

const PROPS: ColumnHeaderProps = {
  field: "adviser",
  name: "Adviser",
  sortDirection: null,
  onClick: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<ColumnHeader {...props} />);

  return {
    container: screen.getByTestId("heatmap-column__header__container"),
    text: screen.getByTestId("heatmap-column_text"),
    arrow: screen.queryByTestId("ChevronUp"),
  };
};

describe("HeatMap / ColumnHeader", () => {
  it("renders component", () => {
    const { text, arrow } = setup();

    expect(text).toHaveTextContent("Adviser");
    expect(arrow).not.toBeInTheDocument();
  });

  it("renders arrow button", () => {
    const { arrow } = setup({ ...PROPS, isSortable: true, sortDirection: "asc" });

    expect(arrow).toBeInTheDocument();
  });

  it("fires handler on click", async () => {
    const { container } = setup();

    await userEvent.click(container);
    expect(PROPS.onClick).toBeCalled();
  });

  it("fires handler on press enter", async () => {
    const { container } = setup({ ...PROPS, isSortable: true });

    await userEvent.tab();
    expect(container).toHaveFocus();
    await userEvent.keyboard("{enter}");
    expect(PROPS.onClick).toBeCalled();
  });
});
