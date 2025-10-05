import { SyntheticEvent } from "react";

export interface CanvasSize {
  width: number;
  height: number;
}

export interface DataNode {
  key: string;
  label: string;
  color: string;
  value: number;
  description?: string;
}

export interface PieChartProps {
  /**
   * Specifies the list of data nodes to be displayed in the chart.
   */
  data: DataNode[];
  /**
   * Specifies the handler to execute when hovering a slice.
   */
  onHoverSlice?: (e: SyntheticEvent, datum: DataNode) => void;
}
