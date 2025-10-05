import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SubmenuContext from "../submenu.context";
import { SubmenuContextProps, SubmenuItemFormatted } from "../submenu.types";
import SubmenuItem from "./submenuItem";

const PROPS: SubmenuItemFormatted = {
  label: "SubmenuItem 1",
  id: "0",
  idsPath: ["0"],
  path: "submenuPath",
};

const defaultContextValue: SubmenuContextProps = {
  currentSelections: ["0"],
  handleClick: jest.fn(),
};

const renderSubmenuItemComponent = (props = PROPS, contextValue = defaultContextValue) => {
  render(withThemeProvider)(
    <SubmenuContext.Provider value={contextValue}>
      <SubmenuItem {...props} />
    </SubmenuContext.Provider>,
  );

  return {
    submenuItem: screen.getByRole("tab"),
  };
};

describe("SubmenuItem Component", () => {
  it("renders the submenu item with correct initial state", () => {
    const { submenuItem } = renderSubmenuItemComponent();
    expect(submenuItem).toBeInTheDocument();
    expect(submenuItem).toHaveTextContent(PROPS.label);
  });

  it("calls the onClick handler when clicking the submenu item", async () => {
    const { submenuItem } = renderSubmenuItemComponent();
    await userEvent.click(submenuItem);
    expect(defaultContextValue.handleClick).toHaveBeenCalled();
  });
});
