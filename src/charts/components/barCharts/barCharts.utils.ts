import { DataNode } from "./barCharts.types";

export const getFlatBarsValues = (data: DataNode[]): number[] => {
  return data.reduce(
    (acc: number[], datum: DataNode) => acc.concat(datum.values.reduce((sum: number, value: number) => sum + value, 0)),
    [0],
  );
};

export const labelArraysNotEqual = (a: string[], b: string[]): boolean => {
  return a.some((currentDataLabel, index) => currentDataLabel !== b[index]);
};

export const getMaxAxisValue = (max: number): number => (max === 0 ? 1 : max) * 1.08;
