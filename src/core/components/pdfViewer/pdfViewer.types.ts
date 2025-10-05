import { DocumentLoadEvent } from "@react-pdf-viewer/core";
import { HighlightArea } from "@react-pdf-viewer/highlight";
import { SingleKeyword } from "@react-pdf-viewer/search";

export interface PdfViewerProps {
  /**
   * Specifies the pdf source.
   */
  src: string | Uint8Array;
  /**
   * Specifies the list of highlights to show in the document.
   */
  highlights?: Highlight[];
  /**
   * Label for the popover button that appears when selecting a text.
   */
  addHighlightButtonLabel?: string;
  /**
   * Specifies the handler to execute when adding a new highlight.
   */
  onAddHighlightHandler?: (highlight: Omit<Highlight, "id" | "color">) => void;
  /**
   * Color for the searches highlights.
   */
  searchTextColor?: string;
  /**
   * Color for the current match searched.
   */
  currentSearchTextColor?: string;
}

export interface PdfViewerRef {
  /**
   * Handler to execute when searching for a term in the document.
   */
  searchTerm: (keyword: SingleKeyword) => Promise<number>;
  /**
   * Handler used to jump to the specified highlight in the document.
   */
  goToHighlight: (highlightArea: HighlightArea) => void;
  /**
   * Handler used to jump to the next found match in the document.
   */
  goToNextMatch: () => void;
  /**
   * Handler used to jump to the previous found match in the document.
   */
  goToPreviousMatch: () => void;
  /**
   * Handler used to jump to a specified found match in the document.
   */
  goToMatch: (index: number) => void;
  /**
   * Handler used to clear all the highlighted searched terms in the document.
   */
  clearSearch: () => void;
  /**
   * Handler used to set a callback to invoke when the current document fully loads.
   */
  onDocumentLoad: (callback?: (e: DocumentLoadEvent) => void) => void;
}

export interface Highlight {
  /**
   * Highlight id.
   */
  id: string;
  /**
   * List of highlighted areas positions. It's a list because there could be more than one box if the quote is multi lines.
   */
  highlightAreas: HighlightArea[];
  /**
   * Quote of the highlight.
   */
  quote: string;
  /**
   * Highlight color.
   */
  color?: string;
}
