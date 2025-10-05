import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import TextEditor from "./textEditor";
import { TextEditorProps } from "./textEditor.types";

const PROPS: TextEditorProps = {
  value: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "hello world",
          },
        ],
      },
    ],
  },
  onChange: jest.fn(),
  placeholder: "placeholder text",
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<TextEditor {...props} />);

  return {
    editor: screen.getByTestId("text-editor"),
  };
};

describe("TextEditor", () => {
  it("renders component with value", () => {
    const { editor } = setup();

    expect(editor).toBeInTheDocument();
    expect(editor.firstChild).toHaveTextContent("hello world");
  });

  it("renders component with placeholder", () => {
    const { editor } = setup({ ...PROPS, value: undefined });

    expect(editor).toBeInTheDocument();
    expect(editor.firstChild?.firstChild).toHaveAttribute("data-placeholder", "placeholder text");
  });
});
