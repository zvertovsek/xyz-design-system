import { calculateDateMinMax, calculateNumericMinMax } from "@charts/utils";
import * as d3 from "d3";
import React, { createRef, useEffect, useState } from "react";
import { ChartWrapper } from "../areaCharts.styles";
import { CanvasSize, DataNode, DateDataNode, ThumbChartProps } from "../areaCharts.types";

export const ThumbAreaChart: React.FC<ThumbChartProps> = ({ name, data, config, settings = {} }) => {
  const [canvasSize, setCanvasSize] = useState<CanvasSize>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const canvasWrapperRef = createRef<HTMLDivElement>();

  const calculateCanvasSize = () => {
    if (canvasWrapperRef.current) {
      setCanvasSize({
        width: canvasWrapperRef.current.clientWidth,
        height: canvasWrapperRef.current.clientHeight,
      });
      setIsLoading(false);
    }
  };

  const buildGraph = (data: DataNode[]) => {
    const canvas = d3.select(`#tac-${name}`);
    const canvasWidth = canvasSize?.width || 0;
    const canvasHeight = canvasSize?.height || 0;

    const parsedData: DateDataNode[] = data.map((datum: DataNode) => ({
      key: datum.key,
      date: d3.timeParse("%Y-%m-%d")(datum.label),
      values: datum.values,
    }));

    const [min, max] = settings.range
      ? settings.range
      : calculateNumericMinMax(data.reduce((acc: number[], datum: DataNode) => acc.concat(datum.values), []));

    const scaleX = d3
      .scaleTime()
      .domain(
        calculateDateMinMax(
          parsedData.reduce((acc: Date[], datum: DateDataNode) => (datum.date ? [...acc, datum.date] : acc), []),
        ),
      )
      .range([0, canvasWidth])
      .nice();

    const scaleY = d3
      .scaleLinear()
      .domain([min, max])
      .range([canvasHeight - 8, 0])
      .nice();

    const gradient = (color: string) => {
      canvas
        .append("linearGradient")
        .attr("id", `${name}-area-gradient`)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0)
        .attr("y1", scaleY(min))
        .attr("x2", 0)
        .attr("y2", scaleY(max * 2))
        .selectAll("stop")
        .data([
          { offset: "0%", color: "white" },
          { offset: "100%", color: color },
        ])
        .enter()
        .append("stop")
        .attr("offset", (d) => d.offset)
        .attr("stop-color", (d) => d.color);
    };

    const valueLine = (i: number) =>
      d3
        .line<DateDataNode>()
        .x((d) => scaleX(d.date as Date))
        .y((d) => scaleY(d.values[i]));

    const area = (i: number) =>
      d3
        .area<DateDataNode>()
        .x((d) => scaleX(d.date as Date))
        .y0(canvasHeight)
        .y1((d) => scaleY(d.values[i]));

    config.map((item) => {
      gradient(item.color);
      canvas.append("path").datum(parsedData).attr("fill", `url(#${name}-area-gradient)`).attr("d", area(item.index));
      canvas
        .append("path")
        .datum(parsedData)
        .attr("fill", "none")
        .attr("stroke-width", "2")
        .attr("stroke", item.color)
        .attr("d", valueLine(item.index));
    });
  };

  useEffect(() => {
    calculateCanvasSize();
  }, []);

  useEffect(() => {
    if (!isLoading) buildGraph(data);
  }, [isLoading]);

  return (
    <ChartWrapper ref={canvasWrapperRef}>
      {isLoading ? (
        "Calculating..."
      ) : (
        <>
          <svg id={`tac-${name}`} viewBox={`0 0 ${canvasSize?.width} ${canvasSize?.height}`} />
        </>
      )}
    </ChartWrapper>
  );
};

export default ThumbAreaChart;
