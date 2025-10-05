import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import VerticalMenu from "./verticalMenu";
import { VerticalMenuProps } from "./verticalMenu.types";

const PROPS: VerticalMenuProps = {
  itemGroups: [
    { key: "group 1", label: "group 1", items: [{ key: "1.1", label: "item", isSelected: false }] },
    { key: "group 2", label: "group 2", items: [{ key: "2.1", label: "item", isSelected: false }] },
  ],
  onMenuItemSelectHandler: jest.fn(),
  viewState: "closed",
};

const renderVerticalMenu = (props = PROPS) => {
  render(withThemeProvider)(<VerticalMenu {...props} />);

  return {
    list: screen.getAllByRole("list")[0],
  };
};

describe("Vertical Menu", () => {
  it("loads menu with correct initial state", () => {
    const { list } = renderVerticalMenu();
    expect(list).toBeInTheDocument();
    expect(list.childNodes).toHaveLength(2);
  });
});
