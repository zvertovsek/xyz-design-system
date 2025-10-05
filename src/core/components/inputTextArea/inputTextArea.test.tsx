import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputTextArea from "./inputTextArea";
import { InputTextAreaProps, Severity } from "./inputTextArea.types";

const PROPS: InputTextAreaProps = {
  value: "test",
  onChange: jest.fn(),
  placeholder: "placeholder text",
  rows: 20,
  cols: 100,
  minLength: 0,
  isInvalid: false,
  severity: Severity.Dark,
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<InputTextArea {...props} />);

  return {
    input: screen.getByRole("textbox"),
    label: screen.queryByTestId("label"),
    errorLabel: screen.queryByTestId("errorLabel"),
    characterLimitLabel: screen.queryByTestId("characterLabel"),
  };
};

describe("InputTextArea", () => {
  it("renders component", async () => {
    const { input, label } = setup();

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "placeholder text");
    expect(input).not.toBeDisabled();
    expect(label).not.toBeInTheDocument();

    await userEvent.type(input, "t");
    expect(PROPS.onChange).toHaveBeenCalled();
  });

  it("renders component with label", () => {
    const { input, label } = setup({ ...PROPS, label: "label text" });

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(/^label text$/);
  });

  it("renders component with error label", () => {
    const { input, errorLabel } = setup({ ...PROPS, errorLabel: "error text", isInvalid: true });

    expect(input).toBeInTheDocument();
    expect(errorLabel).toBeInTheDocument();
    expect(errorLabel).toBeInTheDocument();
    expect(errorLabel).toHaveTextContent(/^error text$/);
    expect(errorLabel).toHaveStyle("color: #FF6541"); //rgb danger 600
  });

  it("renders component with character limit label", () => {
    const { input, characterLimitLabel } = setup({
      ...PROPS,
      isDisabled: false,
      maxLength: 30,
    });

    expect(input).toBeInTheDocument();
    expect(characterLimitLabel).toBeInTheDocument();
    expect(characterLimitLabel).toHaveTextContent(/^26 characters left$/);
    expect(characterLimitLabel).toHaveStyle("color: #B5B5B7");
  });

  it("renders component without character limit label", () => {
    const { input, characterLimitLabel } = setup({
      ...PROPS,
      isDisabled: false,
    });

    expect(input).toBeInTheDocument();
    expect(characterLimitLabel).not.toBeInTheDocument();
  });

  it("renders component with character limit label with 0 characters left", () => {
    const { input, characterLimitLabel } = setup({
      ...PROPS,
      isDisabled: false,
      maxLength: 4,
    });

    expect(input).toBeInTheDocument();
    expect(characterLimitLabel).toBeInTheDocument();
    expect(characterLimitLabel).toHaveTextContent(/^0 characters left$/);
    expect(characterLimitLabel).toHaveStyle("color: #FF6541");
  });
});
