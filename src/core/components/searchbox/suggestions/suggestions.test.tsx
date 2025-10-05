import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { stringReplace } from "@utils";
import SuggestionsComponent from "./suggestions";
import { SuggestionsComponentProps } from "./suggestions.types";

const PROPS: SuggestionsComponentProps = {
  valueSearch: "valueTest",
  onSubmitSearch: jest.fn(),
  suggestionsNodes: [
    {
      id: "idTestgroup",
      title: "Looking for People?",
      items: [
        {
          id: "key1",
          value: "Alex Charing",
          category: "adviser",
        },
        {
          id: "key2",
          value: "Mark Zuckerberg",
          category: "boss",
        },
      ],
    },
  ],
  selectedSuggestionIndex: 1,
  suggestionNodesKeys: ["0-0", "0-1"],
};

jest.mock("@utils", () => ({
  stringReplace: jest.fn(),
}));

const renderSuggestionsComponent = (props = PROPS) => {
  render(withThemeProvider)(<SuggestionsComponent {...props} />);

  return {
    suggestionGroups: screen.getAllByTestId("suggestionGroup"),
    items: screen.getAllByRole("button"),
  };
};

describe("Suggestions", () => {
  it("renders suggestion groups correctly", () => {
    const { suggestionGroups } = renderSuggestionsComponent();

    expect(suggestionGroups).toHaveLength(1);
  });

  it("calls handler when clicking the item", async () => {
    const { items } = renderSuggestionsComponent();

    await userEvent.click(items[0]);
    expect(PROPS.onSubmitSearch).toBeCalled();
  });

  it("calls handler when pressing enter on the item", async () => {
    const { items } = renderSuggestionsComponent();

    items[0].focus();
    await userEvent.keyboard("{enter}");
    expect(PROPS.onSubmitSearch).toBeCalled();
  });

  it("calls stringReplace function for highlighting", () => {
    renderSuggestionsComponent();

    expect(stringReplace).toBeCalledTimes(2);
  });

  it("NOT calls stringReplace function", () => {
    renderSuggestionsComponent({
      ...PROPS,
      suggestionsNodes: [
        {
          id: "idTestgroup",
          title: "Looking for People?",
          items: [
            {
              id: "key1",
              value: "Alex Charing",
              category: "adviser",
              isNotHighlightable: true,
            },
          ],
        },
      ],
    });

    expect(stringReplace).not.toBeCalled();
  });
});
