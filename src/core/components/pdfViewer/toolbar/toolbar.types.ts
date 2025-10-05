import { ToolbarPlugin } from "@react-pdf-viewer/toolbar";

export interface ToolbarProps {
  /**
   * Toolbar plugin instance.
   */
  plugin: ToolbarPlugin;
  /**
   * Handler to execute when setting the full screen mode.
   */
  setFullScreenMode: () => void;
}
