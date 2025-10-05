import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { RefObject } from "react";
import PdfViewer from "./pdfViewer";
import { PdfViewerProps, PdfViewerRef } from "./pdfViewer.types";

jest.mock("@react-pdf-viewer/search", () => ({
  searchPlugin: jest.fn().mockImplementation(() => mockedSearchPluginInstanceProps),
}));

jest.mock("@react-pdf-viewer/highlight", () => ({
  highlightPlugin: jest.fn().mockImplementation(() => mockedHighlightPluginInstanceProps),
}));

const mockedSearchPluginInstanceProps = {
  highlight: jest.fn(() => []),
  jumpToNextMatch: jest.fn(),
  jumpToPreviousMatch: jest.fn(),
};

const mockedHighlightPluginInstanceProps = {
  jumpToHighlightArea: jest.fn(() => []),
};

const PROPS: PdfViewerProps = {
  src: "srcTest",
  highlights: [
    {
      id: "1",
      highlightAreas: [
        {
          height: 3.500937110471425,
          left: 27.003417939558798,
          pageIndex: 0,
          top: 42.49280352963331,
          width: 15.51817420936211,
        },
      ],
      quote: "meters fo",
    },
  ],
  onAddHighlightHandler: jest.fn(),
};

let ref: RefObject<PdfViewerRef> | null = null;

const setup = (props = PROPS) => {
  ref = React.createRef<PdfViewerRef>();
  render(withThemeProvider)(<PdfViewer {...props} ref={ref} />);

  return {
    toolbarComponent: screen.getByTestId("toolbarComponent"),
    toolbarFullScreenButton: screen.getByTestId("FullScreen"),
    getExitFullScreenButton: () => screen.getByTestId("FullScreenExit"),
    getFullScreenViewer: () => screen.queryByTestId("fullScreenViewComponent"),
  };
};

describe("PdfViewer", () => {
  it("renders component", async () => {
    const { toolbarComponent, getFullScreenViewer } = setup();

    expect(toolbarComponent).toBeInTheDocument();
    expect(getFullScreenViewer()).not.toBeInTheDocument();
  });

  it("renders full screen viewer", async () => {
    const { toolbarFullScreenButton, getExitFullScreenButton, getFullScreenViewer } = setup();

    await userEvent.click(toolbarFullScreenButton);
    expect(getFullScreenViewer()).toBeInTheDocument();

    await userEvent.click(getExitFullScreenButton());
    expect(getFullScreenViewer()).not.toBeInTheDocument();
  });

  it("handles ref functions correctly", async () => {
    setup();

    ref?.current?.searchTerm("test");
    expect(mockedSearchPluginInstanceProps.highlight).toHaveBeenCalledWith("test");

    ref?.current?.goToNextMatch();
    expect(mockedSearchPluginInstanceProps.jumpToNextMatch).toHaveBeenCalled();

    ref?.current?.goToPreviousMatch();
    expect(mockedSearchPluginInstanceProps.jumpToPreviousMatch).toHaveBeenCalled();

    ref?.current?.goToHighlight({
      height: 3.500937110471425,
      left: 27.003417939558798,
      pageIndex: 0,
      top: 42.49280352963331,
      width: 15.51817420936211,
    });
    expect(mockedHighlightPluginInstanceProps.jumpToHighlightArea).toHaveBeenCalledWith(
      PROPS.highlights?.[0].highlightAreas[0],
    );
  });
});
