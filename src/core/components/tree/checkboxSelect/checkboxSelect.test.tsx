import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MultiSelectComponent from "./checkboxSelect";
import { CheckboxSelectViewModel } from "./checkboxSelect.types";

const PROPS: CheckboxSelectViewModel = {
  options: [
    {
      key: "1",
      label: "item1",
      children: [
        {
          key: "1-1",
          label: "item1.1",
        },
      ],
    },
  ],
  selectedKeys: ["1"],
  expandedKeys: ["1"],
  onExpandChange: jest.fn(),
  onSelectionChange: jest.fn(),
  onSelectAll: jest.fn(),
  onSelectNone: jest.fn(),
};

const renderCheckboxSelectComponent = (props = PROPS) => {
  render(withThemeProvider)(<MultiSelectComponent vm={props} />);

  return {
    buttons: screen.getAllByRole("button"),
    checkboxes: screen.getAllByRole("checkbox"),
    arrowButtons: screen.getAllByTestId("arrowButton"),
    checkboxesLists: screen.getAllByRole("list"),
  };
};

describe("CheckboxSelect", () => {
  it("calls handler on click buttons", async () => {
    const { buttons } = renderCheckboxSelectComponent();

    await userEvent.click(buttons[0]);
    expect(PROPS.onSelectAll).toBeCalled();
    await userEvent.click(buttons[1]);
    expect(PROPS.onSelectNone).toBeCalled();
  });

  it("calls handler on click checkbox", async () => {
    const { checkboxes } = renderCheckboxSelectComponent();

    await userEvent.click(checkboxes[0]);
    expect(PROPS.onSelectionChange).toBeCalled();
  });

  it("renders arrow icons", () => {
    const { arrowButtons } = renderCheckboxSelectComponent();

    expect(arrowButtons).toHaveLength(1);
  });

  it("renders children nodes", () => {
    const { checkboxesLists } = renderCheckboxSelectComponent();

    expect(checkboxesLists).toHaveLength(2);
  });

  it("calls handler on click arrow button", async () => {
    const { arrowButtons } = renderCheckboxSelectComponent();

    await userEvent.click(arrowButtons[0]);
    expect(PROPS.onExpandChange).toBeCalled();
  });
});
