import { calculateNumericMinMax } from "@charts/utils";
import * as d3 from "d3";
import React, { createRef, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { ChartWrapper, NoDataText } from "../barCharts.styles";
import {
  BarChartSettings,
  CanvasSize,
  Cluster,
  ClusterNode,
  ClusterSelectionGroup,
  ClusteredBarChartProps,
  MetricConfig,
} from "../barCharts.types";
import { getMaxAxisValue, labelArraysNotEqual } from "../barCharts.utils";

const barWidth = 32;
const bottomMargin = 30;
const leftMargin = 30;
const topMargin = 10;
let previousDataLabels: string[] = [];
let isBarsPositionReset: boolean;
let scaleY: d3.ScaleLinear<number, number, never>;

export const VerticalClusteredBarChart: React.FC<ClusteredBarChartProps> = ({
  data,
  config,
  settings = {} as BarChartSettings,
  onHoverBar,
  onClickBar,
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
        .style("color", "rgba(0,0,0,0.1)")
        .style("stroke-dasharray", "3 3")
        .attr("transform", "translate(" + leftMargin + ", " + topMargin + ")");
    };

    renderAxis();
  };

  const updateDataGraph = (data: Cluster[]) => {
    const canvas = d3.select(canvasRef.current);
    const canvasWidth = canvasSize?.width || 0;
    const canvasHeight = canvasSize?.height || 0;
    const clusterTotalWidthAvailable = (canvasWidth - leftMargin) / data.length;
    const spaceBetweenBars = (clusterTotalWidthAvailable / config.length - barWidth) / 2;
    const clusterWidth = (barWidth + spaceBetweenBars) * config.length - spaceBetweenBars;

    const createGroups = (): ClusterSelectionGroup => {
      return canvas
        .selectAll("g.datum")
        .data(data)
        .join((enter) => {
          const createGroupBar = () => {
            const group = enter.append("g").attr("class", "datum");
            group.append("text");

            config.forEach((_item, index) => {
              group
                .append("g")
                .attr("class", `bar bar-${index}`)
                .attr("transform", `translate(${index * (barWidth + spaceBetweenBars)}, 0)`);
            });

            if (settings.displayShadowValues) {
              group
                .selectAll("g.bar")
                .append("rect")
                .attr("class", "rect-shadow")
                .attr("x", -3)
                .attr("y", canvasHeight - bottomMargin - scaleY(0))
                .attr("width", barWidth + 6)
                .style("fill", theme.colorPalettes.primary.default[400]);
            }

            config[0].forEach((item) => {
              group.selectAll("g.bar").append("rect").attr("class", `rect-${item.index}`).attr("width", barWidth);
            });

            group
              .selectAll("g.bar")
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
          return `translate(${i * clusterTotalWidthAvailable + leftMargin + 20}, 0)`;
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
      const getAllValues = (data: Cluster[]) => {
        const values = [0];

        data.forEach((cluster) => {
          cluster.clusterNodes.forEach((clusterNode) => {
            const sumValues = clusterNode.values.reduce((acc, value) => acc + value, 0);
            values.push(sumValues);
          });
        });

        return values;
      };

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

      const [min, max] = settings.range ? settings.range : calculateNumericMinMax(getAllValues(data));

      scaleY.domain([min, getMaxAxisValue(max)]).nice();
      canvas
        .select<SVGSVGElement>("g.axis-y")
        .transition()
        .duration(500)
        .call(d3.axisLeft(scaleY).tickPadding(5).tickSize(-canvasWidth).tickFormat(getTickFormat))
        .selectAll("text")
        .style("fill", theme.colorPalettes.primary.default[500]);
    };

    const updateLabelClusters = (groups: ClusterSelectionGroup): void => {
      groups
        .select("text")
        .attr("y", canvasHeight - 10)
        .attr("x", clusterWidth / 2)
        .attr("dy", ".35em")
        .text((d) => d.label)
        .style("fill", (d) =>
          d.clusterNodes.every((d) => d.values.every((d) => d === 0)) || !d.clusterNodes.length
            ? theme.colorPalettes.primary.default[400]
            : theme.colorPalettes.primary.default[500],
        )
        .attr("text-anchor", "middle");
    };

    const updateShadowBar = (groups: ClusterSelectionGroup, barIndex: number): void => {
      const getYShadow = (dataNode: ClusterNode) => {
        return dataNode.shadowValue ? scaleY(0) - scaleY(dataNode.shadowValue) : 0;
      };

      const shadowBar = groups.select(`g.bar-${barIndex}`).select(".rect-shadow");

      if (isBarsPositionReset) {
        shadowBar.attr("y", canvasHeight - bottomMargin).attr("height", 0);
      }

      shadowBar
        .transition()
        .duration(500)
        .attr("y", function (d) {
          return canvasHeight - bottomMargin - getYShadow(d.clusterNodes[barIndex]);
        })
        .attr("height", function (d) {
          return getYShadow(d.clusterNodes[barIndex]);
        });
    };

    const updateStackedBar = (groups: ClusterSelectionGroup, barIndex: number, configBar: MetricConfig): void => {
      const bars = groups.select(`g.bar-${barIndex}`).select(`.rect-${configBar.index}`).style("fill", configBar.color);

      const addAnimationBars = () => {
        bars
          .transition()
          .duration(500)
          .attr("y", (d) => {
            let sumStackedValues = 0;
            for (let i = 0; i <= configBar.index; i++) {
              sumStackedValues += d.clusterNodes[barIndex].values[i];
            }

            const adjustedY = scaleY(0) - scaleY(sumStackedValues);
            return canvasHeight - bottomMargin - (adjustedY || 0);
          })
          .attr("height", function (d) {
            return scaleY(0) - scaleY(d.clusterNodes[barIndex].values[configBar.index] || 0);
          });
      };

      if (isBarsPositionReset) {
        bars.attr("y", canvasHeight - bottomMargin).attr("height", 0);
      }

      addAnimationBars();
    };

    const updateHoverBar = (groups: ClusterSelectionGroup, barIndex: number): void => {
      groups
        .select(`g.bar-${barIndex}`)
        .select(".hover-handle")
        .on("mouseover", function (this, event, dataNode) {
          dataNode.clusterNodes[barIndex].values.length > 0 && onHoverBar?.(event, dataNode.clusterNodes[barIndex]);
        })
        .on("click", function (this, _event, dataNode) {
          dataNode.clusterNodes[barIndex].values.length > 0 && onClickBar?.(dataNode, barIndex);
        });
    };

    const updateBarsData = (groups: ClusterSelectionGroup): void => {
      config.forEach((configBar, configBarIndex) => {
        configBar.forEach((configItem) => {
          updateStackedBar(groups, configBarIndex, configItem);
          updateHoverBar(groups, configBarIndex);
          if (settings.displayShadowValues) {
            updateShadowBar(groups, configBarIndex);
          }
        });
      });
    };

    const groups = createGroups();
    resetBarsPosition();
    updateAxisData();
    updateLabelClusters(groups);
    updateBarsData(groups);
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

export default VerticalClusteredBarChart;
