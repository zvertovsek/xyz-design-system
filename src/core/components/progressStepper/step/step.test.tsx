import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StepProps } from "../progressStepper.types";
import Step from "./step";

const PROPS: StepProps = {
  label: "Select Case Type",
  isSelected: true,
  isDisabled: false,
  handleClick: jest.fn(),
  stepNumber: 1,
  key: "1",
};

const setup = (props = PROPS) => {
  render(withThemeProvider)(<Step {...props} />);

  return {
    step: screen.getByRole("tab"),
    stepIndex: screen.queryByTestId("stepIndex"),
    completedIcon: screen.queryByTestId("CheckCircle"),
    incompletedIcon: screen.queryByTestId("incompletedIcon"),
    stepTitle: screen.queryByTestId("stepTitle"),
  };
};

describe("Step Component", () => {
  it("renders each step with correct initial state", () => {
    const { step, stepIndex, completedIcon, incompletedIcon, stepTitle } = setup();
    expect(step).toBeInTheDocument();
    expect(stepIndex).toHaveTextContent("1");
    expect(completedIcon).not.toBeInTheDocument();
    expect(incompletedIcon).toBeInTheDocument();
    expect(stepTitle).toBeInTheDocument();
  });

  it("renders the correct elements when isCompleted is true", () => {
    const { stepIndex, incompletedIcon, completedIcon, stepTitle } = setup({
      ...PROPS,
      isCompleted: true,
      isSelected: false,
    });
    expect(stepIndex).not.toBeInTheDocument();
    expect(incompletedIcon).not.toBeInTheDocument();
    expect(completedIcon).toBeInTheDocument();
    expect(stepTitle).not.toBeInTheDocument();
  });

  it("does not call the onClick handler if isDisabled is true", async () => {
    const { step } = setup({ ...PROPS, isDisabled: true, handleClick: undefined });
    await userEvent.click(step);
    expect(PROPS.handleClick).not.toHaveBeenCalled();
  });

  it("calls the onClick handler when clicking the step", async () => {
    const { step } = setup();
    await userEvent.click(step);
    expect(PROPS.handleClick).toHaveBeenCalled();
  });
});
