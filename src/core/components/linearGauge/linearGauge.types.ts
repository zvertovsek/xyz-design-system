export interface LinearGaugeProps {
  /**
   * Value of the gauge to be shown.
   */
  value: number;
  /**
   * Maximum value limit of the whole gauge.
   */
  max: number;
  /**
   * Boolean to decide whether to show a highlighted version of the gauge.
   */
  isHighlighted?: boolean;
  /**
   *  Optional text to show at the right of the gauge.
   */
  text?: string;
}
