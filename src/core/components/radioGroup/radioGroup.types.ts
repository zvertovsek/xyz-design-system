export interface RadioProps {
  value: string;
  label: string;
  checked: boolean;
  name: string;
  onChange: (id: string) => void;
  disabled?: boolean;
}

export type RadioOption = Omit<RadioProps, "checked" | "onChange" | "name">;

export interface RadioGroupProps {
  /**
   * Specifies the name of the radio group. Could be useful to reference it when submitting forms.
   */
  name: string;
  /**
   * Specifies the value of the selected radio option.
   */
  selected: string | undefined;
  /**
   * Specifies the handler to execute on change of the selected radio option.
   */
  onChange: (option: RadioOption) => void;
  /**
   * Specifies the list of radio options.
   */
  options?: RadioOption[];
}
