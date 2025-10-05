import { AlertIcon } from "@icons";
import { render, withThemeProvider } from "@test-utils/renderers";
import { fireEvent, RenderResult, screen } from "@testing-library/react";
import { CommonButtonSize, IconButtonComponentProps } from "../button.types";
import Button from "./iconButton";

const buttonProps: IconButtonComponentProps = {
  icon: AlertIcon,
  testId: "buttonId",
  onClick: jest.fn(),
  size: CommonButtonSize.md,
};

const renderButton = (props: IconButtonComponentProps = buttonProps): RenderResult & { button: Element } => {
  const rendered = render(withThemeProvider)(<Button {...props} />);
  return {
    button: screen.getByTestId("buttonId"),
    ...rendered,
  };
};

describe("Buttons - Icon Button", () => {
  it("button is rendered", () => {
    const { button } = renderButton();
    expect(button).toBeDefined();
  });

  it("onClick should be called", () => {
    const { button } = renderButton({ ...buttonProps });
    fireEvent.click(button);
    expect(buttonProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("icon is displayed", () => {
    const { button } = renderButton({ ...buttonProps });

    const svg = button.querySelector("svg");
    expect(svg).toBeDefined();
  });
});
