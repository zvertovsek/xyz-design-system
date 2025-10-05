import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import MenuBar from "./menuBar";
import { MenuBarProps } from "./menuBar.types";
import { Editor } from "@tiptap/react";
import userEvent from "@testing-library/user-event";

const stubFocusData = {
  toggleBold: jest.fn(() => ({
    run: jest.fn(),
  })),
  toggleItalic: jest.fn(() => ({
    run: jest.fn(),
  })),
  toggleUnderline: jest.fn(() => ({
    run: jest.fn(),
  })),
  toggleStrike: jest.fn(() => ({
    run: jest.fn(),
  })),
  toggleHeading: jest.fn(() => ({
    run: jest.fn(),
  })),
  setParagraph: jest.fn(() => ({
    run: jest.fn(),
  })),
  toggleBulletList: jest.fn(() => ({
    run: jest.fn(),
  })),
  toggleOrderedList: jest.fn(() => ({
    run: jest.fn(),
  })),
};

const PROPS: MenuBarProps = {
  editor: {
    isActive: jest.fn(),
    chain: jest.fn(() => ({
      focus: jest.fn(() => stubFocusData),
    })),
    isEditable: true,
  } as unknown as Editor,
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<MenuBar {...props} />);

  return {
    boldButton: screen.getByTestId("menu-bar__bold-button"),
    italicButton: screen.getByTestId("menu-bar__italic-button"),
    underlinedButton: screen.getByTestId("menu-bar__underlined-button"),
    strikeThroughButton: screen.getByTestId("menu-bar__strike-through-button"),
    h1Button: screen.getByTestId("menu-bar__h1-button"),
    h2Button: screen.getByTestId("menu-bar__h2-button"),
    paragraphButton: screen.getByTestId("menu-bar__paragraph-button"),
    bulletListButton: screen.getByTestId("menu-bar__bullet-list-button"),
    orderedListButton: screen.getByTestId("menu-bar__ordered-list-button"),
  };
};

describe("TextEditor / MenuBar", () => {
  it("calls handlers on click buttons", async () => {
    const {
      boldButton,
      italicButton,
      underlinedButton,
      strikeThroughButton,
      h1Button,
      h2Button,
      paragraphButton,
      bulletListButton,
      orderedListButton,
    } = setup();

    expect(PROPS.editor.isActive).toBeCalledTimes(9);

    await userEvent.click(boldButton);
    expect(stubFocusData.toggleBold).toBeCalled();

    await userEvent.click(italicButton);
    expect(stubFocusData.toggleItalic).toBeCalled();

    await userEvent.click(underlinedButton);
    expect(stubFocusData.toggleUnderline).toBeCalled();

    await userEvent.click(strikeThroughButton);
    expect(stubFocusData.toggleStrike).toBeCalled();

    await userEvent.click(h1Button);
    expect(stubFocusData.toggleHeading).toBeCalledWith({ level: 1 });

    await userEvent.click(h2Button);
    expect(stubFocusData.toggleHeading).toBeCalledWith({ level: 2 });

    await userEvent.click(paragraphButton);
    expect(stubFocusData.setParagraph).toBeCalled();

    await userEvent.click(bulletListButton);
    expect(stubFocusData.toggleBulletList).toBeCalled();

    await userEvent.click(orderedListButton);
    expect(stubFocusData.toggleOrderedList).toBeCalled();
  });
});
