import Icons, { IconProps } from "@icons";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Cell } from "./cell";
import ColumnHeader from "./columnHeader/columnHeader";
import {
  HeatMapWrapper,
  NoDataText,
  getBackgroundColorCellByValue,
  getBorderRadiusCellByDirection,
  getColorCellByValue,
} from "./heatmap.styles";
import { Column, HeatMapProps, Row, SortColumn } from "./heatmap.types";
import { sortColumns, sortRows } from "./heatmap.utils";

export const HeatMap: React.FC<HeatMapProps> = ({
  rows,
  columns,
  sortBy,
  handleHoverCell,
  handleClickCell,
  dontPaintCells = false,
}) => {
  const [sortedRows, setSortedRows] = useState<Row[]>(rows);
  const [sortColumn, setSortColumn] = useState<SortColumn>();
  const { colorPalettes, radii } = useTheme();

  const handleClickColumn = (field: string) => {
    let newSortColumn: SortColumn;

    if (sortColumn?.field === field) {
      newSortColumn = {
        ...sortColumn,
        direction: sortColumn.direction === "asc" ? "desc" : "asc",
      };
      setSortColumn(newSortColumn);
    } else {
      newSortColumn = {
        field,
        type: columns.find((col) => col.field === field)?.sortType || "alphabetic",
        direction: "asc",
      };
      setSortColumn(newSortColumn);
    }

    setSortedRows(sortRows(rows, newSortColumn));
  };

  const getIconByTrend = (trend: "up" | "down" | "flat"): React.FC<IconProps> => {
    switch (trend) {
      case "up":
        return Icons.TrendUpIcon;
      case "down":
        return Icons.TrendDownIcon;
      case "flat":
      default:
        return Icons.TrendFlatIcon;
    }
  };

  const getBorderRadiusCell = (rowIndex: number, column: Column) => {
    const indexCurrentColumn = columns.findIndex((col) => col.field === column.field);
    const indexColumnHeading = columns.findIndex((col) => col.isHeading);
    let indexColumnFooter = columns.findIndex((col) => col.isFooter);

    if (indexColumnFooter === -1) {
      indexColumnFooter = columns.length;
    }

    if (column.isHeading) {
      if (rowIndex === 0) {
        return getBorderRadiusCellByDirection("top", radii);
      } else if (rowIndex === sortedRows.length - 1) {
        return getBorderRadiusCellByDirection("bottom", radii);
      }
    }

    if (column.isFooter) {
      if (rowIndex === 0) {
        return getBorderRadiusCellByDirection("top", radii);
      }
      if (rowIndex === sortedRows.length - 1) {
        return getBorderRadiusCellByDirection("bottom", radii);
      }
    }

    if (rowIndex === 0) {
      if (indexCurrentColumn === indexColumnHeading + 1) {
        return getBorderRadiusCellByDirection("top-left", radii);
      }
      if (indexCurrentColumn === indexColumnFooter - 1) {
        return getBorderRadiusCellByDirection("top-right", radii);
      }
    }
    if (rowIndex === sortedRows.length - 1) {
      if (indexCurrentColumn === indexColumnHeading + 1) {
        return getBorderRadiusCellByDirection("bottom-left", radii);
      }
      if (indexCurrentColumn === indexColumnFooter - 1) {
        return getBorderRadiusCellByDirection("bottom-right", radii);
      }
    }
  };

  useEffect(() => {
    let initialSortColumn: SortColumn = {
      field: columns[0].field,
      direction: "asc",
      type: columns[0].sortType || "alphabetic",
    };

    if (sortBy) {
      initialSortColumn = {
        field: sortBy.field,
        direction: sortBy.direction || "asc",
        type: sortBy.type || "alphabetic",
      };
    }

    setSortColumn(initialSortColumn);
    setSortedRows(sortRows(rows, initialSortColumn));
  }, []);

  useEffect(() => {
    setSortedRows(sortColumn ? sortRows(rows, sortColumn) : rows);
  }, [rows]);

  return (
    <HeatMapWrapper numColumns={columns.length} data-testid="heatmap__container">
      {!rows.length && <NoDataText>No data available</NoDataText>}
      {sortColumns(columns).map(({ isHeading, isFooter, ...column }) => (
        <ColumnHeader
          {...column}
          key={column.field}
          sortDirection={sortColumn?.field === column.field ? sortColumn.direction : null}
          onClick={handleClickColumn}
          hasGap={isHeading || isFooter}
          isDefault={rows.length === 0}
        />
      ))}
      {sortedRows.map((row, rowIndex) => (
        <React.Fragment key={row.id}>
          {columns.map((column) => {
            const { label, description, trend } = row.cells[column.field] || {};

            return (
              <Cell
                key={column.field}
                label={label}
                hasGap={column.isHeading || column.isFooter}
                isHighlightable={column.isHeading}
                color={
                  column.isHeading || dontPaintCells
                    ? colorPalettes.primary.accent[800]
                    : getColorCellByValue(parseFloat(label), colorPalettes)
                }
                backgroundColor={
                  column.isHeading || dontPaintCells
                    ? rowIndex % 2 === 0
                      ? colorPalettes.primary.default[100]
                      : colorPalettes.primary.default[200]
                    : getBackgroundColorCellByValue(parseFloat(label), colorPalettes)
                }
                justifyContent={column.isHeading ? "flex-start" : "center"}
                onHover={
                  handleHoverCell && description ? (e) => description && handleHoverCell?.(e, description) : undefined
                }
                onClick={handleClickCell ? () => handleClickCell(row.id, column.field) : undefined}
                icon={trend ? getIconByTrend(trend) : undefined}
                width={column.width}
                borderRadius={getBorderRadiusCell(rowIndex, column)}
              />
            );
          })}
        </React.Fragment>
      ))}
    </HeatMapWrapper>
  );
};

export default HeatMap;
