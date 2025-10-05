export type BubbleAlignment = "left" | "right";

export interface BubbleProps {
  /**
   * Specifies the handler to execute when the user clicks on the play button in the bubble.
   */
  onPlay?: (seconds: string) => void;
  /**
   * Specifies the body content of the bubble.
   */
  children: string | JSX.Element;
  /**
   * Specifies the time to be displayed in the bubble.
   */
  startTime: string;
  /**
   * Specifies the label to be displayed next to the time in the bubble.
   */
  displayName?: string;
  /**
   * Specifies the alignment of the content in the bubble.
   */
  alignment?: BubbleAlignment;
  /**
   * Specifies if the bubble is active.
   */
  active?: boolean;
  /**
   * Specifies the handler to execute when the user clicks on the bubble.
   */
  onClick?: () => void;
}
