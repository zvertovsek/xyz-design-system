export interface SearchboxProps {
  /**
   * Value of the search bar input.
   */
  value: string;
  /**
   * items to be shown in the suggestions box.
   */
  suggestionGroups: SuggestionGroup[];
  /**
   * selected suggestions to be shown in the search bar.
   */
  selectedSuggestionItems?: SuggestionItem[];
  /**
   * Placeholder of the search bar.
   */
  placeholder?: string;
  /**
   * Flag that indicates whether the cancel button is visible.
   */
  isCancelButtonVisible?: boolean;

  isDisabled?: boolean;
  /**
   * Handler that gets executed when typing on the search bar.
   */
  onChange: (value: string) => void;
  /**
   * Handler that gets executed when searching on the search bar.
   */
  onSubmit: () => void;
  /**
   * Handler that gets executed when clicking the cancel button on the search bar.
   */
  onCancel?: () => void;
  /**
   * Handler that gets executed when removing a selected suggestion item.
   */
  onRemoveSuggestionItem?: (SuggestionItem: SuggestionItem) => void;
  /**
   * Handler that gets executed when adding a suggestion item.
   */
  onAddSuggestionItem?: (suggestionItem: SuggestionItem) => void;
  /**
   * Width of the searchbox.
   */
  width?: string;
  /**
   * class name of the searchbox container.
   */
  className?: string;
}

export interface SuggestionGroup {
  id: string;
  title: string;
  items: SuggestionItem[];
}

export interface SuggestionItem {
  id: string;
  category?: string;
  value: string;
  isNotTaggable?: boolean;
  isNotHighlightable?: boolean;
}

export interface RefTags {
  [key: string]: HTMLDivElement | null;
}
