export type BannerType = "aiInteraction" | "userInteraction";

export interface HeatMapProps {
  /**
   * Specifies the columns configuration of the table.
   */
  columns: Column[];
  /**
   * Specifies the data of each row of the table.
   */
  rows: Row[];
  /**
   * Specificies the sort configuration of the table.
   */
  sortBy?: SortColumn;
  /**
   * Specifies the handler to execute on hover of each cell.
   */
  handleHoverCell?: (e: React.SyntheticEvent<HTMLDivElement>, description: string) => void;
  /**
   * Specifies the handler to execute on click of each cell.
   */
  handleClickCell?: (idRow: string, fieldColumn: string) => void;
  /**
   *
   * Specifies if the cells should not be painted.
   */
  dontPaintCells?: boolean;
}

export interface Column {
  field: string;
  name: string;
  isSortable?: boolean;
  sortType?: "numeric" | "alphabetic";
  isHeading?: boolean;
  isFooter?: boolean;
  width?: string;
}

export interface Cell {
  label: string;
  description?: string;
  trend?: "up" | "down" | "flat";
  value?: number;
}

export interface Row {
  id: string;
  cells: Record<string, Cell>;
}

export interface SingleColumn {
  columnName: string;
  values: string[];
}

export interface SortColumn {
  field: string;
  direction: "asc" | "desc";
  type: "numeric" | "alphabetic";
}
