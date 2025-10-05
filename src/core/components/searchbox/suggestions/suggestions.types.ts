import { SuggestionItem, SuggestionGroup } from "../searchbox.types";

export interface SuggestionsComponentProps {
  suggestionsNodes: SuggestionGroup[];
  valueSearch: string;
  suggestionNodesKeys: string[];
  selectedSuggestionIndex: number;
  onSubmitSearch: (item: SuggestionItem) => void;
}
