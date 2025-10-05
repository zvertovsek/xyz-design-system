import * as d3 from "d3";
import { PieArcDatum } from "d3";
import { useEffect, useRef, useState } from "react";
import { ChartWrapper } from "../pieCharts.styles";
import { CanvasSize, DataNode, PieChartProps } from "../pieCharts.types";

const margin = 20;
let radius: number;

export const BasicPieChart: React.FC<PieChartProps> = ({ data, onHoverSlice }) => {
  const [canvasSize, setCanvasSize] = useState<CanvasSize>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<SVGSVGElement>(null);
  const currentArcs = useRef<Record<string, d3.PieArcDatum<DataNode>>>({});

  const calculateCanvasSize = () => {
    if (canvasWrapperRef.current) {
      setCanvasSize({
        width: canvasWrapperRef.current.clientWidth,
        height: canvasWrapperRef.current.clientWidth,
      });
      setIsLoading(false);
    }
  };

  const buildGraph = () => {
    const canvas = d3.select(canvasRef.current);
    const canvasWidth = canvasSize?.width || 0;
    const canvasHeight = canvasSize?.height || 0;

    radius = Math.min(canvasWidth, canvasHeight) / 2 - margin;

    const renderArcsGroup = () => {
      canvas
        .append("g")
        .attr("class", "graph")
        .attr("transform", `translate(${canvasWidth / 2}, ${canvasHeight / 2})`);
    };

    renderArcsGroup();
  };

  const updateGraph = (data: DataNode[]) => {
    const canvas = d3.select(canvasRef.current);

    const updateDataGraph = () => {
      const graph = canvas.select("g.graph");
      const pie = d3
        .pie<DataNode>()
        .sort(null)
        .value((dataItem) => dataItem.value);
      const arc = d3.arc<PieArcDatum<DataNode>>().innerRadius(0).outerRadius(radius);

      graph
        .selectAll(".arc")
        .data(pie(data))
        .join("path")
        .attr("class", "arc")
        .attr("data-testid", "arc")
        .on("mouseover", function (this, event, dataNode) {
          onHoverSlice?.(event, dataNode.data);
        })
        .transition()
        .duration(500)
        .attr("fill", (d) => d.data.color)
        .attrTween("d", function (d) {
          const i = d3.interpolate(currentArcs.current[d.data.key], d);
          currentArcs.current[d.data.key] = i(0);

          return (t) => arc(i(t)) as string;
        });
    };

    updateDataGraph();
  };

  useEffect(() => {
    calculateCanvasSize();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      buildGraph();
      updateGraph(data);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      updateGraph(data);
    }
  }, [data]);

  return (
    <ChartWrapper ref={canvasWrapperRef}>
      {isLoading ? (
        "Calculating..."
      ) : (
        <svg ref={canvasRef} viewBox={`0 0 ${canvasSize?.width} ${canvasSize?.height}`} />
      )}
    </ChartWrapper>
  );
};

export default BasicPieChart;
