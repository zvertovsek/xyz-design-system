import { SliderViewModel } from "../slider.types";

export interface RangeSliderViewModel extends SliderViewModel {
  /**
   * Range of the slider.
   */
  range: Range;
  /**
   * Selected range of the slider.
   */
  rangeSelected: Range;
  /**
   * Handler that gets called when the selected range changes
   */
  onChange: (values: number[]) => void;
  /**
   * Marks to show on the slider.
   */
  marks?: Record<number, string>;
}

export interface Range {
  start: number;
  end: number;
}
