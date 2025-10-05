import { AriaRole } from "react";

export interface VectorProps {
  /**
   * Width of the vector (falls-back to responsive when container width is less than set width)
   */
  width?: string;
  /**
   * Set to "img" by default for this component;
   * implicit WAI-ARIA role for SVGs is "graphics-document"
   */
  role?: AriaRole;
}

export interface VectorStyledComponentProps {
  width?: string;
}
