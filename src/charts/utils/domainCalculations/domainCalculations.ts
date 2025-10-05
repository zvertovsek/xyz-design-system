export const calculateNumericMinMax = (array: number[]): [min: number, max: number] => {
  const min = array.reduce((a: number, b: number) => Math.min(a, b), 0);
  const max = array.reduce((a: number, b: number) => Math.max(a, b), -Infinity);
  return [min, max];
};

export const calculateDateMinMax = (dates: Array<Date>): [minDate: Date, maxDate: Date] => {
  const minDate = dates.reduce((a: Date, b: Date) => (a < b ? a : b), dates[0]);
  const maxDate = dates.reduce((a: Date, b: Date) => (a > b ? a : b), dates[0]);
  return [minDate, maxDate];
};
