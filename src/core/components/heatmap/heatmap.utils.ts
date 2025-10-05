import { Column, Row, SortColumn } from "./heatmap.types";

export const sortColumns = (columns: Column[]): Column[] => {
  return columns.sort((colA, colB) => {
    const isColAHeading = colA.isHeading;
    const isColBHeading = colB.isHeading;
    const isColAFooter = colA.isFooter;
    const isColBFooter = colB.isFooter;

    if (isColAHeading) {
      return -1;
    }

    if (isColBHeading) {
      return 1;
    }

    if (isColBFooter) {
      return -1;
    }

    if (isColAFooter) {
      return 1;
    }

    return 0;
  });
};

export const sortRows = (rows: Row[], sortColumn: SortColumn): Row[] => {
  const getValueToSort = (row: Row) => {
    const cell = row.cells[sortColumn.field];

    return sortColumn.type === "numeric" ? cell?.value || 0 : cell?.label.toLowerCase() || "";
  };

  return rows.sort((rowA, rowB) => {
    const a = getValueToSort(rowA);
    const b = getValueToSort(rowB);

    if (a < b) {
      return sortColumn.direction === "asc" ? -1 : 1;
    }

    if (a > b) {
      return sortColumn.direction === "asc" ? 1 : -1;
    }

    return 0;
  });
};
