import { SyntheticEvent } from "react";

export interface CanvasSize {
  /**
   * width - width of the canvas
   */
  width: number;
  /**
   * height - height of the canvas
   */
  height: number;
}

export interface DataNode {
  key: string;
  label: string;
  description?: string;
  values: number[];
  shadowValues?: number[];
}

export interface MetricConfig {
  /**
   * index - pointer to the ClusterNode values index
   */
  index: number;
  label: string;
  /**
   * color - used to define the color of the stacked bar defined by the index
   */
  color: string;
}

export interface AxisConfig {
  /**
   * label - used in the axis for the first axis label
   */
  label?: string;
  /**
   * unit - used as a suffix for each axis label (except the first one if the label is defined)
   */
  unit?: "percentage";
}

export interface BarChartSettings {
  /**
   * range - used to define the domain range of the main axis (if not defined the range will be calculated based on the data values)
   */
  range?: [min: number, max: number];
  /**
   * numOfTicks - used to define the amount of ticks in the axis
   */
  numOfTicks?: number;
  /**
   * axisXConfig - used to define the axis x configuration
   */
  axisXConfig?: AxisConfig;
  /**
   * axisYConfig - used to define the axis y configuration
   */
  axisYConfig?: AxisConfig;
  /**
   * displayShadowValues - flag that defines if the shadow bar should be displayed
   */
  displayShadowValues?: boolean;
}

export interface ClusterNode {
  /**
   * values - values used for the stacked bars of the ClusterNode
   */
  values: number[];
  /**
   * shadowValue - value used for the shadow bar of the ClusterNode
   */
  shadowValue?: number;
  /**
   * description - description of the ClusterNode that can be used on hover for ex.
   */
  description?: string;
  /**
   * path - used to navigate to a different url when clicking on ClusterNode
   */
  path?: string;
}

export interface Cluster {
  key: string;
  /**
   * label - used in the axis x to define a name for the entire Cluster
   */
  label: string;
  /**
   * clusterNodes - each node defines a different bar of the Cluster
   */
  clusterNodes: ClusterNode[];
}

interface CommonChartProps<T> {
  /**
   * settings - used to define the settings of the chart
   */
  settings?: BarChartSettings;
  /**
   * onHoverBar - function that will be called when hovering a ClusterNode (whole bar)
   */
  onHoverBar?: (e: SyntheticEvent, datum: T) => void;
}

export interface BarChartProps extends CommonChartProps<DataNode> {
  /**
   * Specifies the list of data nodes to be displayed in the chart.
   */
  data: DataNode[];
  /**
   * Specifies the data nodes configuration.
   */
  config: MetricConfig[];
}

export interface ClusteredBarChartProps extends CommonChartProps<ClusterNode> {
  /**
   * data - array of Clusters that will be displayed in the chart
   */
  data: Cluster[];
  /**
   * config - array of MetricConfig that will be used to define the configuration of the stacked bars
   */
  config: MetricConfig[][];
  /**
   * onClickBar - function that will be called when clicking a ClusterNode (whole bar)
   */
  onClickBar?: (datum: Cluster, barIndex: number) => void;
}

type SelectionGroup<T> = d3.Selection<d3.BaseType | SVGGElement, T, SVGSVGElement | null, unknown>;

export type DataNodeSelectionGroup = SelectionGroup<DataNode>;

export type ClusterSelectionGroup = SelectionGroup<Cluster>;
