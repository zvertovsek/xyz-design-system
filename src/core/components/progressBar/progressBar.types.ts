export interface ProgressBarProps {
  /**
   * Specifies the handler to execute when changing the time on the progress bar.
   */
  onChange: (seconds: number) => void;
  /**
   * Specifies the total time of the progress bar.
   */
  totalTime: number;
}

export interface ProgressBarHandle {
  updateTime: (width: number) => void;
}
