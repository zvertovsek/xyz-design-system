import { fireEvent, screen } from "@testing-library/react";
import SwitchToggle from "./switchToggle";
import { SwitchToggleProps } from "../toggle.types";
import { render, withThemeProvider } from "@test-utils/renderers";

const PROPS: SwitchToggleProps = {
  isChecked: false,
  onChange: jest.fn(),
  label: "Label",
};

const renderToggle = (props = PROPS): Element => {
  render(withThemeProvider)(<SwitchToggle {...props} />);
  return screen.getByTestId("switchToggle");
};

describe("Switch toggle", () => {
  it("switchToggle is rendered with label", () => {
    const toggle = renderToggle();

    expect(toggle).toBeDefined();
  });

  it("onChange should be called", () => {
    const toggle = renderToggle();

    const input = toggle.querySelector("input");

    expect(input?.checked).toEqual(false);
    fireEvent.click(toggle);
    expect(PROPS.onChange).toHaveBeenCalledTimes(1);
  });

  it("label is displayed", () => {
    const toggle = renderToggle({ ...PROPS, labelAlignment: "left" });

    const label = toggle.querySelector("span");
    expect(label).toHaveTextContent(PROPS.label);
  });
});
