import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import { CheckboxProps } from "./checkbox.types";
import Checkbox from "./checkbox";
import userEvent from "@testing-library/user-event";

const PROPS: CheckboxProps = {
  label: "label test",
  id: "id test",
  isChecked: false,
  isDisabled: false,
  onChange: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<Checkbox {...props} />);

  return {
    input: screen.getByRole("checkbox"),
    label: screen.getByTestId("checkbox-label"),
  };
};

describe("Checkbox", () => {
  it("renders component correctly", () => {
    const { input, label } = setup();

    expect(input).toBeInTheDocument();
    expect(input).not.toBeChecked();
    expect(input).not.toBeDisabled();
    expect(label).toHaveTextContent("label test");
  });

  it("renders checkbox checked and disabled", () => {
    const { input } = setup({ ...PROPS, isChecked: true, isDisabled: true });

    expect(input).toBeChecked();
    expect(input).toBeDisabled();
  });

  it("calls handler on click checkbox", async () => {
    const { input, label } = setup();

    await userEvent.click(input);
    await userEvent.click(label);
    expect(PROPS.onChange).toHaveBeenCalledTimes(2);
  });
});
