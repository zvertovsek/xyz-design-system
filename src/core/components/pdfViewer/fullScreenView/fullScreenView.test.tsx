import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FullScreenView from "./fullScreenView";
import { FullScreenViewProps } from "./fullScreenView.types";

const PROPS: FullScreenViewProps = {
  srcDocument: "srcTest",
  plugins: [],
  exitFullScreenMode: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<FullScreenView {...props} />);

  return {
    fullScreenButton: screen.getByRole("button"),
  };
};

describe("PdfViewer / FullScreenView", () => {
  it("exits correctly from full screen mode", async () => {
    const { fullScreenButton } = setup();

    await userEvent.click(fullScreenButton);
    expect(PROPS.exitFullScreenMode).toHaveBeenCalled();
  });
});
