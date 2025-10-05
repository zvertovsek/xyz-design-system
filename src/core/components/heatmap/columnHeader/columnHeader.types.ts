import { Column, SortColumn } from "../heatmap.types";

export interface ColumnHeaderProps extends Omit<Column, "isHeading" | "isFooter"> {
  hasGap?: boolean;
  sortDirection: SortColumn["direction"] | null;
  isDefault?: boolean;
  onClick: (field: string) => void;
}
