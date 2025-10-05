import { calculateNumericMinMax } from "@charts/utils";
import * as d3 from "d3";
import React, { createRef, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { ChartWrapper, NoDataText } from "../barCharts.styles";
import { BarChartProps, BarChartSettings, CanvasSize, DataNode, DataNodeSelectionGroup } from "../barCharts.types";
import { getFlatBarsValues, getMaxAxisValue, labelArraysNotEqual } from "../barCharts.utils";

const barWidth = 32;
const bottomMargin = 30;
const leftMargin = 30;
const topMargin = 10;
let previousDataLabels: string[] = [];
let isBarsPositionReset: boolean;
let scaleY: d3.ScaleLinear<number, number, never>;

export const VerticalBarChart: React.FC<BarChartProps> = ({
  data,
  config,
  settings = {} as BarChartSettings,
  onHoverBar,
}) => {
  const [canvasSize, setCanvasSize] = useState<CanvasSize>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const canvasWrapperRef = createRef<HTMLDivElement>();
  const canvasRef = createRef<SVGSVGElement>();
  const theme = useTheme();

  const calculateCanvasSize = () => {
    if (canvasWrapperRef.current) {
      setCanvasSize({
        width: canvasWrapperRef.current.clientWidth,
        height: 400,
      });
      setIsLoading(false);
    }
  };

  const buildAxis = () => {
    const canvas = d3.select(canvasRef.current);
    const canvasHeight = canvasSize?.height || 0;

    scaleY = d3.scaleLinear().range([canvasHeight - bottomMargin - topMargin, 0]);

    const renderAxis = () => {
      canvas
        .append("g")
        .attr("class", "axis-y")
        .style("color", "rgba(0,0,0,0.6)")
        .style("stroke-dasharray", "3 3")
        .attr("transform", "translate(" + leftMargin + ", " + topMargin + ")");
    };

    renderAxis();
  };

  const updateDataGraph = (data: DataNode[]) => {
    const canvas = d3.select(canvasRef.current);
    const canvasWidth = canvasSize?.width || 0;
    const canvasHeight = canvasSize?.height || 0;

    const createGroups = (): DataNodeSelectionGroup => {
      const spaceBetweenBars = (canvasWidth - leftMargin) / data.length - barWidth;

      return canvas
        .selectAll("g.datum")
        .data(data)
        .join((enter) => {
          const createGroupBar = () => {
            const group = enter.append("g").attr("class", "datum");
            group.append("text");
            const groupRects = group.append("g").attr("class", "bar");

            if (settings.displayShadowValues) {
              groupRects
                .append("rect")
                .attr("class", "rect-shadow")
                .attr("x", -3)
                .attr("y", canvasHeight - bottomMargin - scaleY(0))
                .attr("width", barWidth + 6)
                .style("fill", theme.colorPalettes.primary.default[400]);
            }

            config.forEach((item) => {
              groupRects.append("rect").attr("class", `rect-${item.index}`).attr("width", barWidth);
            });

            group
              .append("rect")
              .attr("class", "hover-handle")
              .attr("height", canvasHeight - bottomMargin - topMargin)
              .attr("y", topMargin)
              .attr("width", barWidth + 12)
              .attr("x", -6);

            return group;
          };

          return createGroupBar();
        })
        .attr("transform", function (_d, i) {
          return "translate(" + (i * (barWidth + spaceBetweenBars) + leftMargin + spaceBetweenBars / 2) + ", 0)";
        });
    };

    const updateAxisData = () => {
      const [min, max] = settings.range ? settings.range : calculateNumericMinMax(getFlatBarsValues(data));

      const getTickFormat = (value: d3.NumberValue, index: number): string => {
        const { label: axisLabel, unit } = settings.axisYConfig || {};
        const numberValueNumberType = value as number;
        let axisUnitValue = "";
        let numberValueString = numberValueNumberType.toString() + "";

        if (axisLabel && index === 0) {
          return axisLabel;
        }
        if (unit === "percentage") {
          axisUnitValue = "%";
          numberValueString = "";

          if (numberValueNumberType % 50 == 0) {
            numberValueString = numberValueNumberType.toString() + axisUnitValue;
          }
        }
        return Number.isInteger(numberValueNumberType) ? numberValueString : "";
      };

      scaleY.domain([min, getMaxAxisValue(max)]).nice();
      canvas
        .select<SVGSVGElement>("g.axis-y")
        .call(d3.axisLeft(scaleY).tickPadding(5).tickSize(-canvasWidth).tickFormat(getTickFormat))
        .style("color", "rgba(233, 233, 235, 1)")
        .selectAll("text")
        .style("fill", theme.colorPalettes.primary.default[500]);
    };

    const styleNameBar = (groups: DataNodeSelectionGroup): void => {
      groups
        .select("text")
        .attr("y", canvasHeight - 10)
        .attr("x", barWidth / 2)
        .attr("dy", ".35em")
        .style("fill", (d) =>
          d.values.every((d) => d === 0) || !d.values.length
            ? theme.colorPalettes.primary.default[400]
            : theme.colorPalettes.primary.default[500],
        )
        .text((d) => d.label)
        .attr("text-anchor", "middle");
    };

    const styleShadowBar = (groups: DataNodeSelectionGroup): void => {
      const shadowBar = groups.select(".rect-shadow");

      const getYShadow = (dataNode: DataNode) => {
        return dataNode.shadowValues ? scaleY(0) - scaleY(dataNode.shadowValues[0]) : 0;
      };

      if (isBarsPositionReset) {
        shadowBar.attr("y", canvasHeight - bottomMargin).attr("height", 0);
      }

      shadowBar
        .transition()
        .duration(500)
        .attr("y", function (d) {
          return canvasHeight - bottomMargin - getYShadow(d);
        })
        .attr("height", function (d) {
          return getYShadow(d);
        });
    };

    const styleStackedBars = (groups: DataNodeSelectionGroup): void => {
      config.forEach((configItem) => {
        const bars = groups.select(`.rect-${configItem.index}`).style("fill", configItem.color);

        if (isBarsPositionReset) {
          bars.attr("y", canvasHeight - bottomMargin).attr("height", 0);
        }

        const addAnimationBars = () => {
          bars
            .transition()
            .duration(500)
            .attr("y", function (d) {
              let sumStackedValues = 0;
              for (let i = 0; i <= configItem.index; i++) {
                sumStackedValues += d.values[i];
              }

              const adjustedY = scaleY(0) - scaleY(sumStackedValues);
              return canvasHeight - bottomMargin - adjustedY;
            })
            .attr("height", function (d) {
              return scaleY(0) - scaleY(d.values[configItem.index]);
            });
        };

        addAnimationBars();
      });
    };

    const updateHoverBars = (groups: DataNodeSelectionGroup): void => {
      groups.select(".hover-handle").on("mouseover", function (this, event, dataNode) {
        onHoverBar?.(event, dataNode);
      });
    };

    const resetBarsPosition = (): void => {
      const currentDataLabels = data.map((dataItem) => dataItem.label);

      if (!data.length || labelArraysNotEqual(currentDataLabels, previousDataLabels)) {
        isBarsPositionReset = true;
      } else {
        isBarsPositionReset = false;
      }

      previousDataLabels = currentDataLabels;
    };

    const groups = createGroups();
    resetBarsPosition();
    updateAxisData();
    styleNameBar(groups);
    styleStackedBars(groups);
    updateHoverBars(groups);
    if (settings.displayShadowValues) {
      styleShadowBar(groups);
    }
  };

  useEffect(() => {
    calculateCanvasSize();

    return () => {
      previousDataLabels = [];
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      buildAxis();
      updateDataGraph(data);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      updateDataGraph(data);
    }
  }, [data]);

  return (
    <ChartWrapper ref={canvasWrapperRef}>
      {isLoading ? (
        "Calculating..."
      ) : (
        <>
          <svg ref={canvasRef} viewBox={`0 0 ${canvasSize?.width} ${canvasSize?.height}`} />
          {!data.length && <NoDataText>No data available</NoDataText>}
        </>
      )}
    </ChartWrapper>
  );
};

export default VerticalBarChart;
