import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TabProps } from "../tabs.types";
import Tab from "./tab";

const PROPS: TabProps = {
  label: "Tab 1",
  key: "0",
  description: "+10% this month",
  isSelected: true,
  isAI: true,
  onClick: jest.fn(),
};

const renderTabComponent = (props: TabProps) => {
  render(withThemeProvider)(<Tab {...props} />);

  return {
    tab: screen.getByRole("tab"),
    tabTitle: screen.getByTestId("tabTitle"),
    subcontent: screen.queryByTestId("tabSubcontent"),
  };
};

describe("Tab Component", () => {
  it("renders each tab with correct initial state", () => {
    const { tab, tabTitle, subcontent } = renderTabComponent(PROPS);
    expect(tab).toBeInTheDocument();
    expect(tabTitle).toBeInTheDocument();
    expect(subcontent).toBeInTheDocument();
  });

  it("calls the onClick handler when clicking the tab", async () => {
    const { tab } = renderTabComponent(PROPS);
    await userEvent.click(tab);
    expect(PROPS.onClick).toHaveBeenCalled();
  });

  it("should not render subcontent when the label and description are absent", () => {
    const PROPS: TabProps = {
      label: "Tab 1",
      key: "0",
      isSelected: true,
      isAI: true,
      onClick: jest.fn(),
    };
    const { subcontent } = renderTabComponent(PROPS);
    expect(subcontent).not.toBeInTheDocument();
  });
});
