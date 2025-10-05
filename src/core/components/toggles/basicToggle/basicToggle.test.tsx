import { AlertIcon } from "@icons";
import { fireEvent, screen } from "@testing-library/react";
import { render, withThemeProvider } from "@test-utils/renderers";
import BasicToggle from "./basicToggle";
import {
  BasicToggleComponentProps,
  ToggleProps,
  BasicToggleSize,
  ColorVariant,
  IconToggleProps,
} from "../toggle.types";

const basicProps: ToggleProps = {
  colorVariant: ColorVariant.grey,
  id: "basicToggle",
  isChecked: false,
  label: "Label",
  onChange: jest.fn(),
  size: BasicToggleSize.sm,
};

const iconProps: IconToggleProps = {
  colorVariant: ColorVariant.grey,
  icon: AlertIcon,
  id: "basicToggle",
  isChecked: false,
  onChange: jest.fn(),
  size: BasicToggleSize.sm,
};

const renderToggle = (props: BasicToggleComponentProps = basicProps): Element => {
  render(withThemeProvider)(<BasicToggle {...props} />);
  return screen.getByTestId("basicToggle");
};

describe("Basic toggle", () => {
  it("basicToggle is rendered with label", () => {
    const toggle = renderToggle();

    expect(toggle).toBeDefined();
  });

  it("onChange should be called", () => {
    const toggle = renderToggle({ ...basicProps });

    const input = toggle.querySelector("input");
    const label = toggle.querySelector("label");

    expect(input?.checked).toEqual(false);
    fireEvent.click(label as HTMLLabelElement);
    expect(basicProps.onChange).toHaveBeenCalledTimes(1);
  });

  it("label is displayed with text", () => {
    const toggle = renderToggle({ ...basicProps });

    const label = toggle.querySelector("label");
    expect(label).toBeDefined();
  });

  it("label is displayed with icon", () => {
    const toggle = renderToggle({ ...iconProps });

    const label = toggle.querySelector("label");
    const svg = toggle.querySelector("svg");
    expect(label).toBeDefined();
    expect(svg).toBeDefined();
  });
});
