import { render, withThemeProvider } from "@test-utils/renderers";
import { fireEvent, screen, RenderResult, waitFor } from "@testing-library/react";
import { SearchInput } from ".";
import { NO_RESULTS_LABEL } from "./matches/matches";
import { SearchInputProps } from "./searchInput.types";

const PROPS: SearchInputProps = {
  value: "",
  placeholder: "placeholder Test",
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  onClear: jest.fn(),
  onMatchChange: jest.fn(),
};

const renderSearchComponent = (props = PROPS): RenderResult => {
  return render(withThemeProvider)(<SearchInput {...props} />);
};

describe("SearchInput", () => {
  it("should render component", () => {
    const { getByTestId } = renderSearchComponent();
    expect(getByTestId("searchWrapper")).toBeInTheDocument();
  });

  it("component is rendered with empty value and submit button on init", () => {
    const { getByTestId } = renderSearchComponent();
    const input = getByTestId("searchInput");
    const submitButton = getByTestId("submitButton");
    expect(input).toHaveValue(PROPS.value);
    expect(submitButton).toBeInTheDocument();
  });

  it("onChange is being called", async () => {
    const { getByTestId } = renderSearchComponent();
    const value = "value";
    const input = getByTestId("searchInput");

    fireEvent.change(input, {
      target: {
        value: value,
      },
    });

    expect(PROPS.onChange).toHaveBeenCalledTimes(1);
    expect(PROPS.onChange).toHaveBeenCalledWith(value);
  });

  it("onChamge is called and clear button is rendered", async () => {
    const value = "value";
    const { getByTestId } = renderSearchComponent({ ...PROPS, value });
    const searchForm = getByTestId("searchForm");
    fireEvent.submit(searchForm);
    expect(PROPS.onSubmit).toHaveBeenCalled();
    expect(PROPS.onSubmit).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(getByTestId("cancelButton")).toBeInTheDocument();
    });
  });

  it("onClear is being called", async () => {
    const value = "value";
    const { getByTestId } = renderSearchComponent({ ...PROPS, value });
    const searchForm = getByTestId("searchForm");
    fireEvent.submit(searchForm);
    await waitFor(() => {
      const cancelButton = getByTestId("cancelButton");
      fireEvent.click(cancelButton);
      expect(PROPS.onClear).toHaveBeenCalledTimes(1);
    });
  });

  it("matches are not rendered on init", () => {
    renderSearchComponent({ ...PROPS });
    expect(screen.queryByTestId("searchMatches")).not.toBeInTheDocument();
  });

  it("matches are rendered", () => {
    const { getByTestId } = renderSearchComponent({ ...PROPS, matches: 2 });
    const incrementButton = getByTestId("searchMatch-increment");
    const decremenetButton = getByTestId("searchMatch-decrement");
    expect(PROPS.onMatchChange).toHaveBeenCalledTimes(1);
    expect(PROPS.onMatchChange).toHaveBeenCalledWith(0);

    fireEvent.click(incrementButton);
    fireEvent.click(decremenetButton);

    expect(PROPS.onMatchChange).toHaveBeenCalledTimes(2);
  });

  it("matches are rendered with no results label", () => {
    const { getByText } = renderSearchComponent({ ...PROPS, matches: 0 });
    expect(getByText(NO_RESULTS_LABEL)).toBeInTheDocument();
  });

  it("should render tags correctly", () => {
    renderSearchComponent({ ...PROPS, tags: ["tag1", "tag2"] });

    const tags = screen.getAllByTestId("tag");
    expect(tags).toHaveLength(2);
  });
});
