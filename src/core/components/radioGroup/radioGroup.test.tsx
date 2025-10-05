import { render, withThemeProvider } from "@test-utils/renderers";
import { fireEvent, RenderResult, waitFor } from "@testing-library/react";
import RadioGroup from "./radioGroup";
import { RadioGroupProps, RadioOption } from "./radioGroup.types";

const radioOption: RadioOption[] = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
];

const PROPS: RadioGroupProps = {
  name: "example",
  onChange: jest.fn(),
  options: radioOption,
  selected: undefined,
};

const renderComponent = (props = PROPS): RenderResult => {
  return render(withThemeProvider)(<RadioGroup {...props} />);
};

describe("RadioGroup", () => {
  it("renders radio inputs", () => {
    const { container } = renderComponent();
    const inputs = container.querySelectorAll('input[type="radio"]');

    expect(container).toBeDefined();
    expect(inputs.length).toEqual(radioOption.length);
  });

  it("component does not exist when option array is empty", async () => {
    const { container } = renderComponent({ ...PROPS, options: [] });

    await waitFor(() => {
      expect(container.childElementCount).toEqual(0);
    });
  });

  it("onChange is triggered", () => {
    const { container } = renderComponent();

    const inputs = container.querySelectorAll('input[type="radio"]');
    fireEvent.click(inputs[0]);
    fireEvent.click(inputs[1]);

    expect(PROPS.onChange).toHaveBeenCalledTimes(2);
    expect(PROPS.onChange).toHaveBeenCalledWith(radioOption[0]);
    expect(PROPS.onChange).toHaveBeenCalledWith(radioOption[1]);
  });

  it("label is displayed", () => {
    const { getByText } = renderComponent();

    expect(getByText(radioOption[0].label)).toBeDefined();
    expect(getByText(radioOption[1].label)).toBeDefined();
  });

  it("element is selected on init", () => {
    const { container } = renderComponent({ ...PROPS, selected: radioOption[0].value });
    const inputs = container.querySelectorAll('input[type="radio"]');

    expect(inputs[0]).toHaveAttribute("checked");
  });
});
