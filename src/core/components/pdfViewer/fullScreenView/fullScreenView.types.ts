import { Plugin } from "@react-pdf-viewer/core";

export interface FullScreenViewProps {
  /**
   * Specifies the pdf source.
   */
  srcDocument: string | Uint8Array;
  /**
   * Specifies the plugins for the viewer.
   */
  plugins: Plugin[];
  /**
   * Handler to execute when exiting the full screen mode.
   */
  exitFullScreenMode: () => void;
}
