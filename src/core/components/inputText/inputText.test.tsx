import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputText from "./inputText";
import { InputTextProps } from "./inputText.types";

const PROPS: InputTextProps = {
  value: "test",
  onChange: jest.fn(),
  placeholder: "placeholder text",
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<InputText {...props} />);

  return {
    input: screen.getByRole("textbox"),
    label: screen.queryByTestId("label"),
  };
};

describe("InputText", () => {
  it("renders component", async () => {
    const { input, label } = setup();

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "placeholder text");
    expect(input).not.toBeDisabled();
    expect(input).toHaveAttribute("type", "text");
    expect(label).not.toBeInTheDocument();

    await userEvent.type(input, "t");
    expect(PROPS.onChange).toHaveBeenCalled();
  });

  it("renders component with label", () => {
    const { input, label } = setup({ ...PROPS, label: "label text" });

    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute("placeholder");
    expect(label).toBeInTheDocument();
  });
});
