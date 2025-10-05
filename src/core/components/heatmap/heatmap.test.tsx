import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeatMap from "./heatmap";
import { HeatMapProps } from "./heatmap.types";

const PROPS: HeatMapProps = {
  columns: [
    {
      field: "adviser",
      name: "Adviser",
      isHeading: true,
      isSortable: true,
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
      field: "average",
      name: "Average",
      isSortable: true,
      isFooter: true,
    },
  ],
  rows: [
    {
      id: "adviser-1",
      cells: {
        monday: {
          label: "1%",
        },
        tuesday: {
          label: "3%",
        },
        adviser: {
          label: "Adviser 1",
          description: "Adviser 1 description",
        },
        average: {
          label: "4%",
          trend: "up",
          value: 4,
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
        },
        average: {
          label: "1%",
          trend: "down",
        },
      },
    },

    {
      id: "adviser-3",
      cells: {
        monday: {
          label: "1%",
        },
        tuesday: {
          label: "3%",
        },
        adviser: {
          label: "Adviser 3",
        },
        average: {
          label: "4%",
          trend: "flat",
        },
      },
    },
  ],
  handleHoverCell: jest.fn(),
  handleClickCell: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<HeatMap {...props} />);

  return {
    columnHeaders: screen.getAllByTestId("heatmap-column__header__container"),
    getCells: () => screen.getAllByTestId("heatmap-cell_container"),
  };
};

describe("HeatMap", () => {
  it("renders component", () => {
    const { columnHeaders, getCells } = setup();
    const rowCells = getCells();

    expect(columnHeaders).toHaveLength(4);
    expect(rowCells).toHaveLength(12);
  });

  it("fires actions handler", async () => {
    const { getCells } = setup();
    const rowCells = getCells();

    await userEvent.hover(rowCells[0]);
    expect(PROPS.handleHoverCell).toHaveBeenCalled();

    await userEvent.click(rowCells[1]);
    expect(PROPS.handleClickCell).toBeCalledWith("adviser-1", "monday");
  });

  it("sorts rows correctly", async () => {
    const { getCells, columnHeaders } = setup();

    expect(getCells()[0].firstChild).toHaveTextContent("Adviser 1");

    //desc
    await userEvent.click(columnHeaders[0]);
    expect(getCells()[0].firstChild).toHaveTextContent("Adviser 3");

    //asc
    await userEvent.click(columnHeaders[0]);
    expect(getCells()[0].firstChild).toHaveTextContent("Adviser 1");
  });
});
