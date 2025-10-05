import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tabs from "./tabs";
import { TabsProps } from "./tabs.types";

const PROPS: TabsProps = {
  items: [
    { label: "Tab 1", key: "0" },
    { label: "Tab 2", key: "1" },
    { label: "Tab 3", key: "2", description: "+10% this month" },
  ],
  currentlySelectedTab: "0",
  onChangeHandler: jest.fn(),
};

const renderTabs = (props = PROPS) => {
  render(withThemeProvider)(<Tabs {...props} />);

  return {
    tabList: screen.getByRole("tablist"),
    tabComponent: screen.getAllByRole("tab"),
  };
};

describe("Tabs", () => {
  it("renders tabs with correct initial state", () => {
    const { tabList, tabComponent } = renderTabs();
    expect(tabList).toBeInTheDocument();
    expect(tabList.childNodes).toHaveLength(3);
    expect(tabComponent[0]).toHaveAttribute("aria-selected", "true");
    expect(tabComponent[1]).toHaveAttribute("aria-selected", "false");
    expect(tabComponent[2]).toHaveAttribute("aria-selected", "false");
  });

  it("should call onChangeHandler when clicking", async () => {
    const { tabComponent } = renderTabs();
    await userEvent.click(tabComponent[2]);
    expect(PROPS.onChangeHandler).toHaveBeenCalled();
  });
});
