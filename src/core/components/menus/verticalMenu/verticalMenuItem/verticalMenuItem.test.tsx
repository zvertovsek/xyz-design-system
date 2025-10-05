import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuContext from "../verticalMenu.context";
import { MenuContextProps } from "../verticalMenu.types";
import VerticalMenuItem from "./verticalMenuItem";
import { VerticalMenuItemProps } from "./verticalMenuItem.types";

const PROPS: VerticalMenuItemProps = {
  isSelected: true,
  label: "item 1",
  key: "item 1",
  icon: "AlertIcon",
  children: [
    { label: "item 1", isSelected: true, key: "item 1" },
    { label: "item 2", isSelected: false, key: "item 2" },
  ],
};

const defaultContextValue: MenuContextProps = {
  viewState: "extended",
  onMenuItemSelectHandler: jest.fn(),
};

const renderMenuItem = (props = PROPS, contextValue = defaultContextValue) => {
  const { baseElement } = render(withThemeProvider)(
    <MenuContext.Provider value={contextValue}>
      <VerticalMenuItem {...props} />
    </MenuContext.Provider>,
  );

  return {
    baseElement,
    item: screen.getByTestId("item-link"),
    label: screen.getByTestId("labelItem"),
    itemIcon: screen.getByTestId("Alert"),
    getArrowIcon: () => screen.queryByTestId("ChevronUp"),
    getList: () => screen.queryByRole("menu"),
  };
};

describe("MenuItem", () => {
  it("loads item with side drawer extended", () => {
    const { item, label, itemIcon, getArrowIcon } = renderMenuItem();
    const arrowIcon = getArrowIcon();

    expect(item).toBeInTheDocument();
    expect(itemIcon).toBeInTheDocument();
    expect(label).toBeVisible();
    expect(arrowIcon).toBeInTheDocument();
    expect(label).toHaveTextContent(PROPS.label);
  });

  it("loads item with side drawer closed", () => {
    const { item, label, itemIcon, getArrowIcon } = renderMenuItem(PROPS, {
      ...defaultContextValue,
      viewState: "closed",
    });
    const arrowIcon = getArrowIcon();

    expect(item).toBeInTheDocument();
    expect(itemIcon).toBeInTheDocument();
    expect(label).not.toBeVisible();
    expect(arrowIcon).not.toBeVisible();
  });

  it("renders list children on click arrow", async () => {
    const { getArrowIcon, getList } = renderMenuItem();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const arrowIcon = getArrowIcon()!; // tested above with same condition so cannot be null

    expect(getList()).not.toBeInTheDocument();
    await userEvent.click(arrowIcon);
    expect(defaultContextValue.onMenuItemSelectHandler).not.toHaveBeenCalled(); // not propagated
    expect(getList()?.children).toHaveLength(2);
  });

  it("calls handler on click item", async () => {
    const { item } = renderMenuItem();
    await userEvent.click(item);
    expect(defaultContextValue.onMenuItemSelectHandler).toHaveBeenCalled();
  });
});
