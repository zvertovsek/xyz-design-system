import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tag from "./tag";
import { TagProps } from "./tag.types";

const PROPS: TagProps = {
  id: "tagId",
  label: "testTag",
  onClick: jest.fn(),
  onKeyDown: jest.fn(),
};

const renderTag = (props = PROPS) => {
  render(withThemeProvider)(<Tag {...props} />);

  return {
    tag: screen.getByTestId("tag"),
    closeIcon: screen.queryByTestId("Close"),
  };
};

describe("Tag", () => {
  it("renders component", () => {
    const { tag, closeIcon } = renderTag();

    expect(tag).toBeInTheDocument();
    expect(closeIcon).not.toBeInTheDocument();
  });

  it("renders close icon", () => {
    const { closeIcon } = renderTag({ ...PROPS, isRemovable: true });

    expect(closeIcon).toBeInTheDocument();
  });

  it("calls handler on click tag", async () => {
    const { tag } = renderTag();

    await userEvent.click(tag);
    expect(PROPS.onClick).toBeCalled();
  });

  it("calls handler on key down on tag", async () => {
    const { tag } = renderTag();

    await userEvent.tab();
    expect(tag).toHaveFocus();
    await userEvent.keyboard("{enter}");
    expect(PROPS.onKeyDown).toBeCalled();
  });
});
