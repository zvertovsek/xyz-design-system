import { MatchesProps } from "./matches/matches.types";

export interface SearchInputProps extends Partial<MatchesProps> {
  /**
   * Specifies the value of the search input.
   */
  value: string;
  /**
   * Specifies the tags to be shown inside the search input.
   */
  tags?: string[];
  /**
   * Specifies the handler to execute on change of the search input value.
   */
  onChange: (value: string) => void;
  /**
   * Specifies the handler to execute on submit of the search input value.
   */
  onSubmit: () => void;
  /**
   * Specifies the placeholder of the search input.
   */
  placeholder?: string;
  /**
   * Specifies the handler to execute on clicking the clear button.
   */
  onClear?: () => void;

  isDisabled?: boolean;
}
