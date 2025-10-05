import { calculateNumericMinMax } from "@charts/utils";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { ChartWrapper, NoDataText } from "../barCharts.styles";
import { BarChartProps, BarChartSettings, CanvasSize, DataNode, DataNodeSelectionGroup } from "../barCharts.types";
import { getFlatBarsValues, getMaxAxisValue, labelArraysNotEqual } from "../barCharts.utils";

const barHeigth = 20;
const spaceBetweenBars = 20;
const bottomMargin = 30;
const topMargin = 10;
let previousDataLabels: string[] = [];
let isBarsPositionReset: boolean;
let scaleX: d3.ScaleLinear<number, number, never>;

export const HorizontalBarChart: React.FC<BarChartProps> = ({
  data,
  config,
  settings = {} as BarChartSettings,
  onHoverBar,
}) => {
  const [canvasSize, setCanvasSize] = useState<CanvasSize>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<SVGSVGElement>(null);
  const theme = useTheme();
  const barDescriptionWidth = data.length == 0 ? 20 : 140;

  const calculateCanvasSize = () => {
    if (canvasWrapperRef.current) {
      setCanvasSize({
        width: canvasWrapperRef.current.clientWidth,
        height: data.length == 0 ? 400 : data.length * (barHeigth + spaceBetweenBars) + bottomMargin + topMargin,
      });
      setIsLoading(false);
    }
  };

  const buildAxis = () => {
    const canvas = d3.select(canvasRef.current);
    const canvasWidth = canvasSize?.width || 0;
    const canvasHeight = canvasSize?.height || 0;

    scaleX = d3
      .scaleLinear()
      .range([0, canvasWidth - barDescriptionWidth])
      .nice();

    const renderAxis = () => {
      canvas
        .append("g")
        .attr("class", "axis-x")
        .style("color", "rgba(0,0,0,0.1)")
        .style("stroke-dasharray", "3 3")
        .attr("transform", "translate(" + barDescriptionWidth + ", " + (canvasHeight - bottomMargin) + ")");
    };

    renderAxis();
  };

  const updateDataGraph = (data: DataNode[]) => {
    const canvas = d3.select(canvasRef.current);

    const createGroups = (): DataNodeSelectionGroup => {
      const canvasWidth = canvasSize?.width || 0;

      return canvas
        .selectAll("g.datum")
        .data(data)
        .join((enter) => {
          const createGroupBar = () => {
            const group = enter.append("g").attr("class", "datum");
            group.append("text");
            const groupRects = group.append("g").attr("class", "bar");

            if (settings.displayShadowValues) {
              groupRects.append("rect").attr("class", "rect-shadow");
            }

            config.forEach((item) => {
              groupRects
                .append("rect")
                .attr("class", `rect-${item.index}`)
                .attr("height", barHeigth)
                .style("fill", item.color);
            });

            group
              .append("rect")
              .attr("class", "hover-handle")
              .attr("height", barHeigth + 12)
              .attr("width", canvasWidth - barDescriptionWidth)
              .attr("y", -6)
              .attr("x", barDescriptionWidth);

            return group;
          };

          return createGroupBar();
        })
        .attr("transform", function (_d, i) {
          return "translate(0, " + (i * (barHeigth + spaceBetweenBars) + topMargin) + ")";
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

    const updateAxisData = () => {
      const canvasHeight = canvasSize?.height || 0;
      const [min, max] = settings.range ? settings.range : calculateNumericMinMax(getFlatBarsValues(data));

      const getTickFormat = (value: d3.NumberValue, index: number): string => {
        const { label: axisLabel, unit } = settings.axisXConfig || {};
        let axisUnitValue = "";

        if (axisLabel && index === 0) {
          return axisLabel;
        }
        if (unit === "percentage") {
          axisUnitValue = "%";
        }
        return Number.isInteger(value) ? value.toString() + axisUnitValue : "";
      };

      scaleX.domain([min, getMaxAxisValue(max)]);

      canvas
        .select<SVGSVGElement>("g.axis-x")
        .transition()
        .duration(500)
        .call(d3.axisBottom(scaleX).tickPadding(5).tickSize(-canvasHeight).tickSizeOuter(0).tickFormat(getTickFormat))
        .selectAll("text")
        .style("fill", theme.colorPalettes.primary.default[500]);

      d3.select(".domain").remove();

      if (settings.axisXConfig?.label) {
        canvas.select<SVGSVGElement>("g.axis-x .tick:first-of-type text").style("text-anchor", "start");
      }
    };

    const styleNameBar = (groups: DataNodeSelectionGroup): void => {
      groups
        .select("text")
        .attr("y", barHeigth / 2)
        .attr("dy", ".35em")
        .style("font-size", "11px")
        .style("fill", (d) =>
          d.values.every((d) => d === 0) || !d.values.length
            ? theme.colorPalettes.primary.default[400]
            : theme.colorPalettes.primary.default[500],
        )
        .text((d) => d.label);
    };

    const styleShadowBar = (groups: DataNodeSelectionGroup): void => {
      const shadowBar = groups.select(".rect-shadow");

      if (isBarsPositionReset) {
        shadowBar.attr("width", 0);
      }

      shadowBar
        .attr("x", barDescriptionWidth)
        .attr("height", barHeigth + 6)
        .attr("rx", 3)
        .attr("y", -3)
        .style("fill", theme.colorPalettes.primary.default[300])
        .transition()
        .duration(500)
        .attr("width", function (d) {
          return d.shadowValues ? scaleX(d.shadowValues[0]) : 0;
        });
    };

    const styleStackedBars = (groups: DataNodeSelectionGroup): void => {
      config.forEach((configItem) => {
        const bars = groups.select(`.rect-${configItem.index}`);

        if (isBarsPositionReset) {
          bars.attr("x", barDescriptionWidth).attr("width", 0);
        }

        const addAnimationBars = () => {
          bars
            .transition()
            .duration(500)
            .attr("x", function (d) {
              let x = barDescriptionWidth;
              if (configItem.index === 0) {
                return x;
              }
              for (let i = 0; i < configItem.index; i++) {
                x += scaleX(d.values[i]);
              }
              return x;
            })
            .attr("width", function (d) {
              return scaleX(d.values[configItem.index]);
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

export default HorizontalBarChart;
