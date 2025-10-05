import { SuggestionItem, SuggestionGroup } from "./searchbox.types";

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getSelectedSuggestion = (
  selectedSuggestionKey: string,
  suggestionNodes: SuggestionGroup[],
): SuggestionItem => {
  const indexes = selectedSuggestionKey.split("-");
  const suggestionNodeIndex = Number(indexes[0]);
  const suggestionNodeItemIndex = Number(indexes[1]);

  return suggestionNodes[suggestionNodeIndex].items[suggestionNodeItemIndex];
};

export const getSuggestionNodeKeys = (suggestionGroups: SuggestionGroup[]): string[] => {
  const suggestionNodesKeys: string[] = [];

  suggestionGroups.forEach((node, indexSuggestion) =>
    node.items.forEach((_item, indexSuggestionItem) =>
      suggestionNodesKeys.push(`${indexSuggestion}-${indexSuggestionItem}`),
    ),
  );

  return suggestionNodesKeys;
};
