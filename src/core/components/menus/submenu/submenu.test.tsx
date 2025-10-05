import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Submenu from "./submenu";
import { SubmenuProps } from "./submenu.types";

const PROPS: SubmenuProps = {
  items: [
    { label: "submenu 1", id: "0", path: "submenu1Path" },
    { label: "submenu 2", id: "1", path: "submenu2Path" },
  ],
  currentSelections: ["0"],
  onItemClickHandler: jest.fn(),
};

const renderSubmenu = (props = PROPS) => {
  render(withThemeProvider)(<Submenu {...props} />);

  return {
    submenuList: screen.getByRole("tablist"),
    submenuSlider: screen.getByRole("slider"),
    submenuComponent: screen.getAllByRole("tab"),
  };
};

describe("Submenus Component", () => {
  it("renders submenus with correct initial state", () => {
    const { submenuList, submenuSlider, submenuComponent } = renderSubmenu();
    expect(submenuSlider).toBeInTheDocument();
    expect(submenuList).toBeInTheDocument();
    expect(submenuList.childNodes).toHaveLength(2);
    expect(submenuComponent[0]).toHaveAttribute("aria-selected", "true");
    expect(submenuComponent[1]).toHaveAttribute("aria-selected", "false");
  });

  it("should call onChangeHandler when clicking", async () => {
    const { submenuComponent } = renderSubmenu();
    await userEvent.click(submenuComponent[1]);
    expect(PROPS.onItemClickHandler).toHaveBeenCalled();
  });
});
