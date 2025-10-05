import { fireEvent, screen } from "@testing-library/react";
import { render, withThemeProvider } from "@test-utils/renderers";
import PrimaryToggle from "./primaryToggle";
import { PrimaryToggleProps, SelectionType } from "../toggle.types";

const primaryProps: PrimaryToggleProps = {
  id: "primaryToggle",
  isChecked: false,
  onChange: jest.fn(),
  label: "Label",
  selectionType: SelectionType.User,
};

const renderToggle = (props = primaryProps): Element => {
  render(withThemeProvider)(<PrimaryToggle {...props} />);
  return screen.getByTestId("primaryToggle");
};

describe("Primary toggle", () => {
  it("primaryToggle is rendered with label", () => {
    const toggle = renderToggle();

    expect(toggle).toBeDefined();
  });

  it("onChange should be called", () => {
    const toggle = renderToggle({ ...primaryProps });

    const input = toggle.querySelector("input");
    const label = toggle.querySelector("label");

    expect(input?.checked).toEqual(false);
    fireEvent.click(label as HTMLLabelElement);
    expect(primaryProps.onChange).toHaveBeenCalledTimes(1);
  });

  it("label is displayed", () => {
    const toggle = renderToggle({ ...primaryProps });

    const label = toggle.querySelector("label");
    expect(label).toBeDefined();
  });
});
