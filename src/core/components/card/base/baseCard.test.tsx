import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BaseCard from "./baseCard";
import { BaseCardProps } from "./baseCard.types";

const PROPS: BaseCardProps = {
  isSelected: false,
  onClickCard: jest.fn(),
};

const renderBaseCard = (props = PROPS) => {
  render(withThemeProvider)(<BaseCard {...props}>Test Card</BaseCard>);

  return {
    tile: screen.getByTestId("baseCard"),
  };
};

describe("BaseCard", () => {
  it("renders children", () => {
    const { tile } = renderBaseCard();

    expect(tile).toHaveTextContent("Test Card");
  });

  it("calls handler on click tile", async () => {
    const { tile } = renderBaseCard();

    await userEvent.click(tile);
    expect(PROPS.onClickCard).toHaveBeenCalled();
  });

  it("calls handler on press enter on tile", async () => {
    const { tile } = renderBaseCard();
    await userEvent.tab();
    expect(tile).toHaveFocus();
    await userEvent.keyboard("{enter}");
    expect(PROPS.onClickCard).toHaveBeenCalled();
  });
});
