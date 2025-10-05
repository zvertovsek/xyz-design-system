import { SyntheticEvent } from "react";

export interface CanvasSize {
  width: number;
  height: number;
}

export interface DataNode {
  key: string;
  label: string;
  description?: string;
  values: Array<number | null>;
}

export interface ParsedDataNode {
  key: string;
  date: Date | null;
  description?: string;
  values: Array<number | null>;
}

export interface RangeGroupDataNode {
  key: string;
  x1: string;
  x2: string;
  description?: string;
}

export interface MetricConfig {
  index: number;
  label: string;
  color: string;
}

export interface AxisConfig {
  label?: string;
  unit?: "percentage";
}

export interface LineChartSettings {
  timespan: "1W" | "1M" | "3M" | "6M" | "1Y" | "3Y";
  range?: [min: number, max: number];
  axisYConfig?: AxisConfig;
}

export interface LineChartProps {
  /**
   * Specifies the unique name of the chart.
   */
  name: string;
  /**
   * Specifies the list of data nodes to be displayed in the chart.
   */
  data: DataNode[];
  /**
   * Specifies the list of range groups to be displayed in the chart.
   */
  rangeGroups?: RangeGroupDataNode[];
  /**
   * Specifies the data nodes configuration.
   */
  config: MetricConfig[];
  /**
   * Specifies the chart configuration.
   */
  settings?: LineChartSettings;
  /**
   * Specifies the handler to be called when the user hovers over a data point.
   */
  onHoverDataPoint?: (e: SyntheticEvent, datum: ParsedDataNode | RangeGroupDataNode) => void;
}
