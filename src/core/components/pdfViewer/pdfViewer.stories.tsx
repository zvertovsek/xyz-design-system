import { Meta, StoryFn } from "@storybook/react";
import { styleScrollbar } from "@utils";
import { useRef } from "react";
import { styled } from "styled-components";
import PdfViewer from "./pdfViewer";
import { PdfViewerProps, PdfViewerRef } from "./pdfViewer.types";

export default {
  title: "Components/Pdf Viewer",
  component: PdfViewer,
} as Meta;

const PDFViewerWrapper = styled.div`
  width: 500px;
  height: 600px;
  ${styleScrollbar};
`;

export const Default: StoryFn<PdfViewerProps> = (props) => {
  const viewerRef = useRef<PdfViewerRef>(null);
  return (
    <PDFViewerWrapper>
      <PdfViewer {...props} ref={viewerRef} />
    </PDFViewerWrapper>
  );
};

Default.args = {
  src: "https://pdfobject.com/pdf/pdf_open_parameters_acro8.pdf",
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
        {
          height: 0.013736998662352562,
          left: 0.0841117575764656,
          top: 0.25195443630218506,
          width: 0.15438984334468842,
          pageIndex: 0,
        },
      ],
      quote: "meters fo",
    },
  ],
};

Default.storyName = "Pdf Viewer";
