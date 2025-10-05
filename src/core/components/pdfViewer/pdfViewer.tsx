import Layout from "@core/components/layout";
import Icons from "@icons";
import { DocumentLoadEvent, Viewer, Worker } from "@react-pdf-viewer/core";
import {
  HighlightArea,
  RenderHighlightTargetProps,
  RenderHighlightsProps,
  highlightPlugin,
} from "@react-pdf-viewer/highlight";
import { searchPlugin } from "@react-pdf-viewer/search";
import { SelectionMode } from "@react-pdf-viewer/selection-mode";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { showPortal } from "@utils";
import React, { useImperativeHandle, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { IconButton } from "../button";
import { FullScreenView } from "./fullScreenView";
import { PopoverButton, PopoverWrapper, ViewerWrapper } from "./pdfViewer.styles";
import { PdfViewerProps, PdfViewerRef } from "./pdfViewer.types";
import { ToolbarComponent } from "./toolbar";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

export const PdfViewer = React.forwardRef<PdfViewerRef, PdfViewerProps>(
  (
    { src, addHighlightButtonLabel, highlights = [], onAddHighlightHandler, currentSearchTextColor, searchTextColor },
    ref,
  ) => {
    const { colorPalettes } = useTheme();
    const [isFullScreenMode, setIsFullScreenMode] = useState<boolean>(false);
    const refOnDocumentLoad = useRef<(e: DocumentLoadEvent) => void>();

    const renderHighlightTarget = (props: RenderHighlightTargetProps) => {
      const onConfirmationHandler = () => {
        onAddHighlightHandler?.({
          quote: props.selectedText,
          highlightAreas: props.highlightAreas,
        });
        props.cancel();
      };

      const copyToClipboard = async () => {
        const selectionContent = props.selectedText.toString();
        navigator.clipboard.writeText(selectionContent || "");
        props.cancel();
      };

      return (
        <PopoverWrapper
          left={props.selectionRegion.left}
          top={props.selectionRegion.top}
          height={props.selectionRegion.height}
        >
          <IconButton icon={Icons.CopyIcon} onClick={copyToClipboard} />
          <PopoverButton onClick={onConfirmationHandler} label={addHighlightButtonLabel || "Add highlight"} />
        </PopoverWrapper>
      );
    };

    const renderHighlights = (props: RenderHighlightsProps) => (
      <>
        {highlights?.map((highlight) => (
          <React.Fragment key={highlight.id}>
            {highlight.highlightAreas
              .filter((area) => area.pageIndex === props.pageIndex)
              .map((area, idx) => (
                <Layout.Container
                  key={idx}
                  style={Object.assign(
                    {},
                    {
                      background: highlight.color || `${colorPalettes.primary.accent[200]}80`,
                    },
                    props.getCssProperties(area, props.rotation),
                  )}
                />
              ))}
          </React.Fragment>
        ))}
      </>
    );

    const highlightPluginInstance = highlightPlugin({
      ...(!!onAddHighlightHandler && { renderHighlightTarget }),
      renderHighlights,
    });

    const highlightPluginInstanceFullScreen = highlightPlugin({
      ...(!!onAddHighlightHandler && { renderHighlightTarget }),
      renderHighlights,
    });

    const searchPluginInstance = searchPlugin({
      onHighlightKeyword: (props) => {
        props.highlightEle.style.backgroundColor = searchTextColor || `${colorPalettes.secondary.color1[100]}80`;
      },
    });

    const toolbarPluginInstance = toolbarPlugin({
      selectionModePlugin: {
        selectionMode: SelectionMode.Text,
      },
    });

    useImperativeHandle(
      ref,
      () => ({
        searchTerm: async (keyword) => {
          return (await searchPluginInstance.highlight(keyword)).length;
        },
        goToHighlight: (highlightArea: HighlightArea) => {
          highlightPluginInstance.jumpToHighlightArea(highlightArea);
        },
        goToNextMatch: () => {
          searchPluginInstance.jumpToNextMatch();
        },
        goToPreviousMatch: () => {
          searchPluginInstance.jumpToPreviousMatch();
        },
        goToMatch: (index) => {
          searchPluginInstance.jumpToMatch(index);
        },
        clearSearch: () => {
          searchPluginInstance.clearHighlights();
        },
        onDocumentLoad: (callback) => {
          refOnDocumentLoad.current = callback;
        },
      }),
      [searchPluginInstance, highlightPluginInstance],
    );

    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <ViewerWrapper currentSearchTextColor={currentSearchTextColor}>
          <ToolbarComponent plugin={toolbarPluginInstance} setFullScreenMode={() => setIsFullScreenMode(true)} />
          <Viewer
            fileUrl={src}
            plugins={[toolbarPluginInstance, highlightPluginInstance, searchPluginInstance]}
            onDocumentLoad={(e) => refOnDocumentLoad.current?.(e)}
          />
        </ViewerWrapper>

        {isFullScreenMode &&
          showPortal(
            <FullScreenView
              srcDocument={src}
              exitFullScreenMode={() => setIsFullScreenMode(false)}
              plugins={[highlightPluginInstanceFullScreen]}
            />,
          )}
      </Worker>
    );
  },
);

export default PdfViewer;
