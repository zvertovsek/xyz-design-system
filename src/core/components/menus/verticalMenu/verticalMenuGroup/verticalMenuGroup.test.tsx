import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import MenuContext from "../verticalMenu.context";
import { MenuContextProps } from "../verticalMenu.types";
import VerticalMenuGroup from "./verticalMenuGroup";
import { VerticalMenuGroupProps } from "./verticalMenuGroup.types";

const PROPS: VerticalMenuGroupProps = {
  key: "group 1",
  label: "group 1",
  items: [
    { label: "item 1", isSelected: true, key: "item 1" },
    { label: "item 2", isSelected: false, key: "item 2" },
  ],
};

const defaultContextValue: MenuContextProps = {
  viewState: "closed",
  onMenuItemSelectHandler: jest.fn(),
};

const renderMenuGroup = (props = PROPS, contextValue = defaultContextValue) => {
  render(withThemeProvider)(
    <MenuContext.Provider value={contextValue}>
      <VerticalMenuGroup {...props} />
    </MenuContext.Provider>,
  );

  return {
    title: screen.queryByTestId("titleGroup"),
    list: screen.getByRole("menu"),
  };
};

describe("MenuGroup", () => {
  it("loads group correctly with closed menu", () => {
    const { title, list } = renderMenuGroup();
    expect(title).not.toBeVisible();
    expect(list).toBeInTheDocument();
  });

  it("loads group correctly with extended menu", () => {
    const { title, list } = renderMenuGroup(PROPS, { ...defaultContextValue, viewState: "extended" });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(PROPS.label);
    expect(list).toBeInTheDocument();
  });

  it("loads no title group if not present", () => {
    const { title } = renderMenuGroup({ ...PROPS, label: "" });
    expect(title).not.toBeInTheDocument();
  });

  it("loads list items correctly", () => {
    const { list } = renderMenuGroup();
    expect(list).toBeInTheDocument();
    expect(list.childNodes).toHaveLength(2);
  });
});
