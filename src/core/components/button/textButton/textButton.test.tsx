import { render, withThemeProvider } from "@test-utils/renderers";
import { fireEvent, RenderResult, screen } from "@testing-library/react";
import { ButtonComponentProps } from "../button.types";
import Button from "./textButton";

const buttonProps: ButtonComponentProps = {
  testId: "buttonId",
  label: "Label",
  onClick: jest.fn(),
};

const renderButton = (props: ButtonComponentProps = buttonProps): RenderResult & { button: Element } => {
  const rendered = render(withThemeProvider)(<Button {...props} />);
  return {
    button: screen.getByTestId("buttonId"),
    ...rendered,
  };
};

describe("Basic button", () => {
  it("button is rendered", () => {
    const { button } = renderButton();
    expect(button).toBeDefined();
  });

  it("onClick should be called", () => {
    const { button } = renderButton({ ...buttonProps });
    fireEvent.click(button);
    expect(buttonProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("label is displayed with text", () => {
    const { getByText } = renderButton({ ...buttonProps });
    expect(getByText("Label")).toBeInTheDocument();
  });
});
