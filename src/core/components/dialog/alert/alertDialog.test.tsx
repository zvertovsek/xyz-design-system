import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlertDialog from "./alertDialog";
import { AlertDialogProps } from "./alertDialog.model";

const PROPS: AlertDialogProps = {
  dialogContent: "Your changes have been saved successfully.",
  dialogTitle: "Alert dialog",
  isVisible: true,
  buttonLabel: "Close",
  onConfirm: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<AlertDialog {...props} />);

  return {
    alert: screen.queryByTestId("modal-wrapper"),
    title: screen.queryByTestId("title-modal"),
    description: screen.queryByTestId("alertDialogComponent-content"),
    button: screen.queryByRole("button"),
  };
};

describe("Alert Dialog", () => {
  it("renders component", async () => {
    const { alert, title, description, button } = setup();

    expect(alert).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/^Close$/);
    expect(title).toHaveTextContent(/^Alert dialog$/);
    expect(description).toHaveTextContent(/^Your changes have been saved successfully.$/);

    await userEvent.click(button!);

    expect(PROPS.onConfirm).toHaveBeenCalled();
  });

  it("should not render dialog if isVisible flag is set to false", () => {
    const { alert } = setup({ ...PROPS, isVisible: false });

    expect(alert).not.toBeInTheDocument();
  });

  it("should not render dialog with default button label if not defined", () => {
    const { button } = setup({ ...PROPS, buttonLabel: undefined });

    expect(button).toHaveTextContent(/^OK$/);
  });
});
