import { calculateDateMinMax, calculateNumericMinMax } from "@charts/utils";
import * as d3 from "d3";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { ChartWrapper, NoDataText } from "../lineCharts.styles";
import {
  CanvasSize,
  DataNode,
  LineChartProps,
  MetricConfig,
  ParsedDataNode,
  RangeGroupDataNode,
} from "../lineCharts.types";
import { getNumberMaxAxisValue } from "../lineCharts.utils";

const MARGINS = {
  right: 25,
  left: 40,
  bottom: 30,
  top: 5,
};
let scaleX: d3.ScaleTime<number, number, never>;
let scaleY: d3.ScaleLinear<number, number, never>;
const DATE_FORMAT = "%Y-%m-%d";

export const BasicLineChart: React.FC<LineChartProps> = ({ data, rangeGroups, config, settings, onHoverDataPoint }) => {
  const [canvasSize, setCanvasSize] = useState<CanvasSize>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<SVGSVGElement>(null);
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
    const canvasWidth = canvasSize?.width || 0;
    const canvasHeight = canvasSize?.height || 0;

    scaleX = d3.scaleTime().range([MARGINS.left, canvasWidth]);

    scaleY = d3.scaleLinear().range([canvasHeight - MARGINS.bottom, 0]);

    const renderTimeAxis = () => {
      canvas
        .append("g")
        .attr("class", "axis-x")
        .style("color", "rgba(0,0,0,0.1)")
        .style("font-size", theme.fontSizes.xs)
        .attr("transform", "translate(0, " + (canvasHeight - MARGINS.bottom + MARGINS.top) + ")");
    };

    const renderValueGrid = () => {
      canvas
        .append("g")
        .attr("class", "axis-y")
        .style("color", "rgba(0,0,0,0.6)")
        .style("stroke-dasharray", "3 3")
        .attr("transform", "translate(" + MARGINS.left + ", " + MARGINS.top + ")");
    };

    const renderLineChartWrapper = () => {
      canvas.append("g").attr("class", "line-chart-wrapper");
    };

    const renderOverlayWrapper = () => {
      canvas.append("g").attr("class", "overlay-wrapper");
    };

    renderTimeAxis();
    renderValueGrid();
    renderLineChartWrapper();
    renderOverlayWrapper();
  };

  const updateDataGraph = (data: DataNode[], rangeGroups: RangeGroupDataNode[] | undefined) => {
    const canvas = d3.select(canvasRef.current);
    const parsedData: ParsedDataNode[] = data.map((datum: DataNode) => ({
      key: datum.key,
      date: d3.timeParse(DATE_FORMAT)(datum.label),
      description: datum.description,
      values: datum.values,
    }));

    const createGroups = () => {
      canvas
        .select("g.line-chart-wrapper")
        .selectAll("g.lineGroup")
        .data(config)
        .join((enter) => {
          const createLineGroup = () => {
            const group = enter.append("g").attr("class", (configItem) => `lineGroup lineGroup-${configItem.index}`);
            group.append("path").attr("class", "path-dashed");
            group.append("path").attr("class", "path-solid");
            group.append("g").attr("class", "circles");
            return group;
          };

          return createLineGroup();
        });
    };

    const updateAxisData = () => {
      const canvasWidth = canvasSize?.width || 0;
      const [min, max] =
        data.length == 0
          ? [0, 1]
          : calculateNumericMinMax(
              data.reduce((acc: number[], datum: DataNode) => {
                const onlyNumbers = datum.values.filter(Number) as number[];
                return acc.concat(onlyNumbers);
              }, []),
            );
      const [dateMin, dateMax] = calculateDateMinMax(
        parsedData.reduce((acc: Date[], datum: ParsedDataNode) => (datum.date ? [...acc, datum.date] : acc), []),
      );

      const getNumberOfTicksForDateAxis = () => {
        if (settings && settings.timespan) {
          switch (settings.timespan) {
            case "6M":
              return d3.timeMonth.every(1);
            case "1M":
              return d3.timeWeek.every(1);
            case "1W":
              return d3.timeDay.every(1);
            default:
              return d3.timeMonth.every(3);
          }
        }

        return d3.timeMonth.every(1);
      };

      const getTickFormat = (value: d3.NumberValue, index: number): string => {
        const { label: axisLabel, unit } = settings?.axisYConfig || {};
        let axisUnitValue = "";

        if (axisLabel && index === 0) {
          return axisLabel;
        }
        if (unit === "percentage") {
          axisUnitValue = "%";
        }
        return Number.isInteger(value) ? value.toString() + axisUnitValue : "";
      };

      scaleX.domain([dateMin, dateMax]);
      scaleY.domain([min, max > 0 ? getNumberMaxAxisValue(max) : 1]).nice();
      canvas
        .select<SVGSVGElement>("g.axis-x")
        .transition()
        .duration(500)
        .call(
          d3
            .axisBottom<Date>(scaleX)
            .ticks(getNumberOfTicksForDateAxis())
            .tickFormat(d3.timeFormat("%b %d"))
            .tickSizeOuter(0),
        );
      canvas
        .select<SVGSVGElement>("g.axis-y")
        .transition()
        .duration(500)
        .call(d3.axisLeft(scaleY).tickPadding(10).tickSize(-canvasWidth).tickFormat(getTickFormat))
        .style("color", "rgba(233, 233, 235, 1)");

      canvas.selectAll("text").style("fill", theme.colorPalettes.primary.default[500]);
    };

    const renderDataLine = () => {
      config.forEach((item: MetricConfig) => {
        const lineGroupPath = canvas.select(`g.lineGroup-${item.index}`);

        const renderDashedPath = () => {
          let lastValidDatumIndex: number;

          lineGroupPath
            .select(".path-dashed")
            .datum(parsedData)
            .join("path")
            .attr("fill", "none")
            .attr("stroke", theme.colorPalettes.primary.default[400])
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", "3 3")
            .attr("transform", "translate(0" + "," + MARGINS.top + ")")
            .transition()
            .duration(500)
            .attr(
              "d",
              d3
                .line<ParsedDataNode>()
                .x((d: ParsedDataNode) => {
                  const yValue = d.values[item.index];

                  if (typeof yValue === "number") {
                    return scaleX(d.date as Date);
                  } else {
                    return scaleX(parsedData[lastValidDatumIndex]?.date as Date);
                  }
                })
                .y((d: ParsedDataNode, index) => {
                  const yValue = d.values[item.index];

                  if (typeof yValue === "number") {
                    lastValidDatumIndex = index;
                    return scaleY(yValue);
                  } else {
                    return scaleY(parsedData[lastValidDatumIndex]?.values[item.index] as number);
                  }
                }),
            );
        };

        const renderSolidPath = () => {
          lineGroupPath
            .select(".path-solid")
            .datum(parsedData)
            .join("path")
            .attr("fill", "none")
            .attr("stroke", item.color)
            .attr("stroke-width", 1.5)
            .attr("transform", "translate(0" + "," + MARGINS.top + ")")
            .transition()
            .duration(500)
            .attr(
              "d",
              d3
                .line<ParsedDataNode>()
                .x((d) => scaleX(d.date as Date))
                .y((d) => {
                  return scaleY(d.values[item.index] as number);
                })
                .defined((d) => d.values[item.index] !== null),
            );
        };

        renderDashedPath();
        renderSolidPath();
      });
    };

    const renderDataPoints = () => {
      function onMouseOver(event: SyntheticEvent, el: d3.BaseType | SVGCircleElement, dataNode: ParsedDataNode) {
        d3.select(el).style("opacity", 1);
        onHoverDataPoint?.(event, dataNode);
      }

      function onMouseOut(this: d3.BaseType | SVGCircleElement) {
        d3.select(this).style("opacity", 0);
      }

      config.forEach((item: MetricConfig) => {
        const lineGroupCircles = canvas.select(`g.lineGroup-${item.index}`).select("g.circles");

        lineGroupCircles
          .selectAll("circle")
          .data(parsedData)
          .join("circle")
          .attr("fill", item.color)
          .attr("r", 4)
          .attr("cx", (d: ParsedDataNode) => scaleX(d.date as Date))
          .attr("cy", (d: ParsedDataNode) => scaleY(d.values[item.index] as number))
          .style("opacity", 0)
          .style("display", (d: ParsedDataNode) => d.values[item.index] === null && "none")
          .attr("transform", "translate(0" + "," + MARGINS.top + ")")
          .on("mouseover", function (this, event, dataNode) {
            onMouseOver(event, this, dataNode);
          })
          .on("mouseout", onMouseOut);
      });
    };

    const renderRangeDataGroups = () => {
      const canvasHeight = canvasSize?.height || 0;

      function onHoverCircles(dataNode: RangeGroupDataNode, action: "over" | "out") {
        const minScaleX = scaleX(d3.timeParse(DATE_FORMAT)(dataNode.x1) as Date);
        const maxScaleX = scaleX(d3.timeParse(DATE_FORMAT)(dataNode.x2) as Date);

        d3.selectAll("circle")
          .filter(function (this) {
            const cxCircle = Number(d3.select(this).attr("cx"));
            return cxCircle >= minScaleX && cxCircle <= maxScaleX;
          })
          .style("opacity", action === "over" ? 1 : 0);
      }

      function onMouseOver(event: SyntheticEvent, dataNode: RangeGroupDataNode) {
        onHoverDataPoint?.(event, dataNode);
        onHoverCircles(dataNode, "over");
      }

      if (rangeGroups) {
        canvas
          .select("g.overlay-wrapper")
          .selectAll("rect")
          .data(rangeGroups)
          .join("rect")
          .attr("x", (d: RangeGroupDataNode) => scaleX(d3.timeParse(DATE_FORMAT)(d.x1) as Date) - 5)
          .attr("height", canvasHeight - MARGINS.bottom)
          .attr(
            "width",
            (d: RangeGroupDataNode) =>
              scaleX(d3.timeParse("%Y-%m-%d")(d.x2) as Date) - scaleX(d3.timeParse(DATE_FORMAT)(d.x1) as Date) + 10,
          )
          .on("mouseover", function (this, event, dataNode) {
            onMouseOver(event, dataNode);
          })
          .on("mouseout", function (this, _event, dataNode) {
            onHoverCircles(dataNode, "out");
          });
      }
    };

    createGroups();
    updateAxisData();
    renderDataLine();
    renderDataPoints();
    renderRangeDataGroups();
  };

  useEffect(() => {
    calculateCanvasSize();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      buildAxis();
      updateDataGraph(data, rangeGroups);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      updateDataGraph(data, rangeGroups);
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

export default BasicLineChart;
