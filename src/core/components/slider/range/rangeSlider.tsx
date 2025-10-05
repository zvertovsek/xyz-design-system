import React from "react";
import { RangeSliderWrapper, SliderLabel } from "./rangeSlider.styles";
import { RangeSliderViewModel } from "./rangeSlider.types";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ComponentProps } from "@core/components/components.types";

export const RangeSlider: React.FC<ComponentProps<RangeSliderViewModel>> = ({
  vm: { range, rangeSelected, startLabel, endLabel, isReverse, onChange, marks },
}) => {
  return (
    <RangeSliderWrapper data-testid="range-slider">
      <SliderLabel>{!isReverse ? startLabel : endLabel}</SliderLabel>
      <Slider
        range
        value={[rangeSelected.start, rangeSelected.end]}
        onChange={(values) => onChange(values as number[])}
        min={range.start}
        max={range.end}
        dots={true}
        reverse={isReverse}
        marks={marks}
      />
      <SliderLabel>{!isReverse ? endLabel : startLabel}</SliderLabel>
    </RangeSliderWrapper>
  );
};

export default RangeSlider;
