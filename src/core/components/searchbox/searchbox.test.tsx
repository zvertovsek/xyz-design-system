import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbox from "./searchbox";
import { SearchboxProps } from "./searchbox.types";

const PROPS: SearchboxProps = {
  value: "valueTest",
  suggestionGroups: [
    {
      id: "idTestgroup",
      title: "Looking for People?",
      items: [
        {
          id: "key1",
          value: "Alex Charing",
          category: "adviser",
          isNotTaggable: true,
        },
        {
          id: "key2",
          value: "Mark Zuckerberg",
          category: "boss",
        },
      ],
    },
  ],
  selectedSuggestionItems: [
    {
      id: "key1",
      value: "Alex Charing",
      category: "adviser",
    },
  ],
  placeholder: "placeholder Test",
  isCancelButtonVisible: false,
  isDisabled: false,
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  onAddSuggestionItem: jest.fn(),
  onCancel: jest.fn(),
  onRemoveSuggestionItem: jest.fn(),
};

const renderSearchboxComponent = (props = PROPS) => {
  render(withThemeProvider)(<Searchbox {...props} />);

  return {
    tags: screen.queryAllByTestId("tag"),
    searchbar: screen.getByRole("textbox"),
    cancelButton: screen.queryByTestId("cancelButton"),
    submitButton: screen.queryByTestId("submitButton"),
    getSuggestionGroups: () => screen.queryAllByTestId("suggestionGroup"),
  };
};

describe("Searchbox", () => {
  it("render searchbar correctly", () => {
    const { searchbar } = renderSearchboxComponent();

    expect(searchbar).toHaveAttribute("value", PROPS.value);
    expect(searchbar).toHaveAttribute("placeholder", "");
  });

  it("render placeholder on searchbar with no selected items", () => {
    const { searchbar } = renderSearchboxComponent({ ...PROPS, selectedSuggestionItems: [] });

    expect(searchbar).toHaveAttribute("placeholder", PROPS.placeholder);
  });

  it("calls handler on typing on searchbar", async () => {
    const { searchbar } = renderSearchboxComponent();

    searchbar.focus();
    await userEvent.keyboard("s");
    expect(PROPS.onChange).toBeCalled();
  });

  it("renders selected items correctly", () => {
    const { tags } = renderSearchboxComponent();
    expect(tags).toHaveLength(1);
  });

  it("calls handler on pressing backspace on item", async () => {
    const { tags } = renderSearchboxComponent();

    tags[0].focus();
    await userEvent.keyboard("{backspace}");
    expect(PROPS.onRemoveSuggestionItem).toBeCalled();
  });

  it("renders cancel button", async () => {
    const { cancelButton } = renderSearchboxComponent({ ...PROPS, isCancelButtonVisible: true });

    expect(cancelButton).toBeInTheDocument();

    cancelButton && (await userEvent.click(cancelButton));
    expect(PROPS.onCancel).toBeCalled();
  });

  it("renders submit button", async () => {
    const { cancelButton, submitButton } = renderSearchboxComponent();

    expect(cancelButton).not.toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    submitButton && (await userEvent.click(submitButton));
    expect(PROPS.onSubmit).toBeCalled();
  });

  it("renders suggestion groups", async () => {
    const { searchbar, getSuggestionGroups } = renderSearchboxComponent();

    await searchbar.focus();
    const suggestionGroups = getSuggestionGroups();
    expect(suggestionGroups).toHaveLength(1);
  });

  it("calls handler on pressing enter in searchbar", async () => {
    const { searchbar } = renderSearchboxComponent();

    searchbar.focus();
    await userEvent.keyboard("{enter}");
    expect(PROPS.onSubmit).toBeCalled();
    searchbar.focus();
    await userEvent.keyboard("{arrowdown}{enter}");
    expect(PROPS.onAddSuggestionItem).toBeCalled();
  });

  it("moves focus on tag when pressing backspace in searchbar", async () => {
    const { searchbar, tags } = renderSearchboxComponent({ ...PROPS, value: "" });

    searchbar.focus();
    await userEvent.keyboard("{backspace}");

    expect(tags[0]).toHaveFocus();
  });

  it("goes grey if it is disabled", () => {
    const { searchbar } = renderSearchboxComponent({ ...PROPS, isDisabled: true });
    expect(searchbar).toHaveAttribute("disabled");
  });
});
