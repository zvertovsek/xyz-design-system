import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import { CarouselProps } from "./carousel.types";
import Carousel from "./carousel";
import userEvent from "@testing-library/user-event";

const PROPS: CarouselProps = {
  header: "title carousel",
  numVisible: 2,
  items: [<div>card1</div>, <div>card2</div>, <div>card3</div>],
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<Carousel {...props} />);

  return {
    header: screen.getByTestId("carousel-header"),
    arrowLeftButton: screen.getByTestId("arrow-left-button"),
    arrowRightButton: screen.getByTestId("arrow-right-button"),
    list: screen.getByRole("list"),
  };
};

describe("Carousel", () => {
  it("renders component correctly", async () => {
    const { header, list, arrowLeftButton, arrowRightButton } = setup();

    expect(header).toHaveTextContent("title carousel");
    expect(arrowLeftButton).toBeInTheDocument();
    expect(arrowLeftButton).toBeDisabled();
    expect(arrowRightButton).toBeInTheDocument();
    expect(arrowRightButton).not.toBeDisabled();
    expect(list.children).toHaveLength(3);

    await userEvent.click(arrowRightButton);
    expect(arrowLeftButton).not.toBeDisabled();
    expect(arrowRightButton).toBeDisabled();

    await userEvent.click(arrowLeftButton);
    expect(arrowLeftButton).toBeDisabled();
    expect(arrowRightButton).not.toBeDisabled();
  });
});
