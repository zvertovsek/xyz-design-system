import { ToolbarPlugin } from "@react-pdf-viewer/toolbar";
import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToolbarComponent from "./toolbar";
import { ToolbarProps } from "./toolbar.types";

const PROPS: ToolbarProps = {
  plugin: {
    Toolbar: ({ children }) =>
      children({
        ZoomIn: ({ children }) => children({ onClick: jest.fn() }),
        ZoomOut: ({ children }) => children({ onClick: jest.fn() }),
        SwitchSelectionMode: ({ children }) => children({ onClick: jest.fn() }),
      }),
  } as unknown as ToolbarPlugin,
  setFullScreenMode: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<ToolbarComponent {...props} />);

  return {
    container: screen.getByTestId("toolbarComponent"),
    panButton: screen.queryByTestId("PanTool"),
    getArrowButton: () => screen.queryByTestId("ArrowSelector"),
    zoomInButton: screen.getByTestId("ZoomIn"),
    zoomOutButton: screen.getByTestId("ZoomOut"),
    fullScreenButton: screen.getByTestId("FullScreen"),
  };
};

describe("PdfViewer / Toolbar", () => {
  it("renders component", async () => {
    const { container, panButton, getArrowButton, zoomInButton, zoomOutButton, fullScreenButton } = setup();

    expect(container).toBeInTheDocument();
    expect(panButton).toBeInTheDocument();
    expect(getArrowButton()).not.toBeInTheDocument();
    expect(zoomInButton).toBeInTheDocument();
    expect(zoomOutButton).toBeInTheDocument();
    expect(fullScreenButton).toBeInTheDocument();
  });

  it("switch correctly selection mode", async () => {
    const { panButton, getArrowButton } = setup();

    panButton && (await userEvent.click(panButton));
    expect(panButton).not.toBeInTheDocument();
    expect(getArrowButton()).toBeInTheDocument();
  });

  it("activates correctly the full screen mode", async () => {
    const { fullScreenButton } = setup();

    await userEvent.click(fullScreenButton);
    expect(PROPS.setFullScreenMode).toHaveBeenCalled();
  });
});
