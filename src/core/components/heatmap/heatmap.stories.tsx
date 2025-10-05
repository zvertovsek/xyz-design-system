import { Meta, StoryFn } from "@storybook/react";
import { TooltipProvider, useTooltip } from "../tooltip";
import HeatMap from "./heatmap";
import { HeatMapProps } from "./heatmap.types";

export default {
  title: "Components/HeatMap",
  component: HeatMap,
} as Meta;

export const App: StoryFn<HeatMapProps> = (args) => (
  <TooltipProvider>
    <Default {...args} />
  </TooltipProvider>
);

const Default: StoryFn<HeatMapProps> = (args) => {
  const { showTooltip } = useTooltip();

  return <HeatMap {...args} handleHoverCell={(e, description) => showTooltip(description)(e)} />;
};

App.args = {
  sortBy: {
    field: "average",
    direction: "desc",
    type: "numeric",
  },
  dontPaintCells: true,
  columns: [
    {
      field: "adviser",
      name: "Adviser",
      isHeading: true,
      isSortable: true,
      width: "20rem",
    },
    {
      field: "monday",
      name: "Monday",
      isSortable: true,
    },
    {
      field: "tuesday",
      name: "Tuesday",
      isSortable: true,
    },
    {
      field: "wednesday",
      name: "Wednesday",
      isSortable: true,
    },
    {
      field: "average",
      name: "Average",
      isSortable: true,
      sortType: "numeric",
      isFooter: true,
    },
  ],
  rows: [
    {
      id: "adviser-1",
      cells: {
        tuesday: {
          label: "20%",
          description: "Tuesday 20%",
        },
        adviser: {
          label: "Adviser 1",
          description: "Adviser 1 description",
        },
        average: {
          label: "20%",
          value: 20,
          description: "Average 11%",
          trend: "down",
        },
      },
    },
    {
      id: "adviser-2",
      cells: {
        adviser: {
          label: "Adviser 2",
          description: "Adviser 2 description",
        },
        monday: {
          label: "1%",
          description: "Monday 1%",
        },
        tuesday: {
          label: "43%",
          description: "Tuesday 43%",
        },
      },
    },
    {
      id: "adviser-3",
      cells: {
        adviser: {
          label: "Adviser 3",
          description: "Adviser 3 description",
        },
        monday: {
          label: "9%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "71%",
          description: "Tuesday 71%",
        },
        average: {
          label: "80%",
          value: 80,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
    {
      id: "adviser-4",
      cells: {
        adviser: {
          label: "Adviser 4",
          description: "Adviser 3 description",
        },
        monday: {
          label: "Monday 9%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "71%",
          description: "Tuesday 71%",
        },
        average: {
          label: "10%",
          value: 10,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
    {
      id: "adviser-5",
      cells: {
        adviser: {
          label: "Adviser 5",
          description: "Adviser 3 description",
        },
        monday: {
          label: "9%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "71%",
          description: "Tuesday 71%",
        },
        average: {
          label: "100%",
          value: 100,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
    {
      id: "adviser-6",
      cells: {
        adviser: {
          label: "Adviser 6",
          description: "Adviser 3 description",
        },
        monday: {
          label: "9%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "71%",
          description: "Tuesday 71%",
        },
        average: {
          label: "100%",
          value: 100,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
    {
      id: "adviser-7",
      cells: {
        adviser: {
          label: "Adviser 7",
          description: "Adviser 3 description",
        },
        monday: {
          label: "9%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "71%",
          description: "Tuesday 71%",
        },
        average: {
          label: "100%",
          value: 100,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
    {
      id: "adviser-8",
      cells: {
        adviser: {
          label: "Adviser 8",
          description: "Adviser 3 description",
        },
        monday: {
          label: "49%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "87%",
          description: "Tuesday 71%",
        },
        average: {
          label: "100%",
          value: 100,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
    {
      id: "adviser-9",
      cells: {
        adviser: {
          label: "Adviser 9",
          description: "Adviser 3 description",
        },
        monday: {
          label: "93%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "31%",
          description: "Tuesday 71%",
        },
        average: {
          label: "40%",
          value: 100,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
    {
      id: "adviser-10",
      cells: {
        adviser: {
          label: "Adviser 10",
          description: "Adviser 3 description",
        },
        monday: {
          label: "59%",
          description: "Monday 9%",
        },
        tuesday: {
          label: "81%",
          description: "Tuesday 71%",
        },
        average: {
          label: "30%",
          value: 100,
          description: "Average 80%",
          trend: "flat",
        },
      },
    },
  ],
};
App.storyName = "HeatMap";
