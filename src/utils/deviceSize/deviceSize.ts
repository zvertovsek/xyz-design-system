import { Range } from "./deviceSize.types";
export const getMediaQuerySize = (range: Range, size: string, maxSize?: string): string => {
  switch (range) {
    case Range.Min:
    case Range.Max:
      return `(${range}-width: ${size})`;
    case Range.MinMax: {
      return `(${Range.Min}-width: ${size}) and (${Range.Max}-width: ${maxSize})`;
    }
  }
};
