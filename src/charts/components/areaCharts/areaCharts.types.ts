export interface CanvasSize {
  width: number;
  height: number;
}

export interface DataNode {
  key: string;
  label: string;
  values: number[];
}

export interface DateDataNode {
  key: string;
  date: Date | null;
  values: number[];
}

export interface MetricConfig {
  index: number;
  label: string;
  color: string;
}

export interface AreaChartSettings {
  range?: [min: number, max: number];
}

export interface ThumbChartProps {
  /**
   * Specifies the unique name of the chart.
   */
  name: string;
  /**
   * Specifies the list of data nodes to be displayed in the chart.
   */
  data: DataNode[];
  /**
   * Specifies the data nodes configuration.
   */
  config: MetricConfig[];
  /**
   * Specifies the chart configuration.
   */
  settings?: AreaChartSettings;
}
