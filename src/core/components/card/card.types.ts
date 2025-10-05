import { Severity } from "../tag/tag.types";

export interface Card {
  /**
   * Color of the card to be shown.
   */
  colorCard?: string;
  /**
   * on click handler to be executed when you click on the card.
   */
  onClickCard?: () => void;
  /**
   * flag that indicates whether the card is selected or not.
   */
  isSelected?: boolean;
  /**
   * class name of the base card.
   */
  className?: string;
}

export interface Attribute {
  label: string;
  description?: string;
  severity?: Severity;
  isHighlighted?: boolean;
}

export interface Status {
  progress: "analysing" | "upload failed" | "ready" | "in progress" | "with remedial actions" | "complete";
  label: string;
}
