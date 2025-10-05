import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Steps from "./progressStepper";
import { ProgressStepperProps } from "./progressStepper.types";

const PROPS: ProgressStepperProps = {
  items: [
    {
      label: "Select Case Type",
      isCompleted: true,
      key: "1",
    },
    {
      label: "Upload Documents",
      isCompleted: true,
      key: "2",
    },
    {
      label: "Confirm details",
      isDisabled: true,
      key: "3",
    },
    {
      label: "Confirm details",
      isDisabled: true,
      key: "4",
    },
  ],
  selectedItem: "1",
  onChangeHandler: jest.fn(),
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<Steps {...props} />);

  return {
    stepList: screen.getByRole("tablist"),
    stepComponent: screen.getAllByRole("tab"),
  };
};

describe("Steps", () => {
  it("renders steps with correct initial state", () => {
    const { stepList } = setup();
    expect(stepList).toBeInTheDocument();
    expect(stepList.childNodes).toHaveLength(4);
  });

  it("should call onChangeHandler when clicking", async () => {
    const { stepComponent } = setup();
    await userEvent.click(stepComponent[1]);
    expect(PROPS.onChangeHandler).toBeCalledWith("2");
  });

  it("does not call anything if isDisabled is set", async () => {
    const { stepComponent } = setup();
    await userEvent.click(stepComponent[2]);
    expect(PROPS.onChangeHandler).not.toBeCalled();
  });
});
