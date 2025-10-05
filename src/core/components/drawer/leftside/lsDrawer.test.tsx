import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DrawerProps } from "../drawer.types";
import Drawer from "./lsDrawer";

const PROPS: DrawerProps = {
  isOpen: true,
  changeIsOpen: jest.fn(),
};

const renderDrawer = (props = PROPS) => {
  render(withThemeProvider)(<Drawer {...props} />);

  return {
    button: screen.queryByRole("button", { hidden: true }),
  };
};
describe("Drawer", () => {
  it("loads button correctly when drawer visible", () => {
    const { button } = renderDrawer();
    expect(button).not.toBeInTheDocument();
  });

  it("calls handler on click button", async () => {
    const { button } = renderDrawer({ ...PROPS, isCollapsible: true });

    button && (await userEvent.click(button));
    expect(PROPS.changeIsOpen).toHaveBeenCalled();
  });
});
