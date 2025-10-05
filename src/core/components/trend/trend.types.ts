export interface TrendComponentProps {
  /**
   * Specifies the severity of the trend.
   */
  severity: Severity;
  /**
   * Specifies the label befor the direction arrow is shown.
   */
  forelabel?: string;
  /**
   * Specifies label of the trend.
   */
  label: string;
  /**
   * Specifies the direction arrow of the trend.
   */
  direction: "up" | "down" | "flat" | "hidden";
  /**
   * Specifies the handler to execute when the trend is clicked.
   */
  onClickHandler?: React.MouseEventHandler<HTMLElement>;
}

export type Severity = "positive" | "negative" | "flat" | "neutral" | "ai";
