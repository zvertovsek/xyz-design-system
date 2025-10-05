import Layout from "@core/components/layout";
import Typography from "@core/components/typography";
import { stringReplace } from "@utils";
import { useTheme } from "styled-components";
import { SuggestionItem } from "../searchbox.types";
import {
  SuggestionItemName,
  SuggestionItemCategory,
  GroupItemsWrapper,
  SuggestionItemWrapper,
  GroupTitleWrapper,
  SuggestionsWrapper,
} from "./suggestions.styles";
import { SuggestionsComponentProps } from "./suggestions.types";

const SuggestionsComponent: React.FC<SuggestionsComponentProps> = ({
  suggestionsNodes,
  valueSearch,
  selectedSuggestionIndex,
  suggestionNodesKeys,
  onSubmitSearch,
}) => {
  const theme = useTheme();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, item: SuggestionItem) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmitSearch(item);
    }
  };

  return (
    <SuggestionsWrapper>
      {suggestionsNodes.map(({ id: idGroup, items, title }, indexSuggestionGroup) => (
        <Layout.Container key={idGroup} data-testid="suggestionGroup">
          <GroupTitleWrapper>
            <Typography.Overline color={theme.colorPalettes.primary.default[500]}>{title}</Typography.Overline>
          </GroupTitleWrapper>
          <GroupItemsWrapper role="list">
            {items.map((item, indexSuggestionItem) => {
              const { id: idItem, category, value, isNotHighlightable } = item;
              const currentUniqueKey = `${indexSuggestionGroup}-${indexSuggestionItem}`;

              return (
                <SuggestionItemWrapper
                  className={suggestionNodesKeys[selectedSuggestionIndex] === currentUniqueKey ? "active" : ""}
                  key={idItem}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  onClick={() => onSubmitSearch(item)}
                >
                  <SuggestionItemName>
                    {valueSearch && !isNotHighlightable
                      ? stringReplace(value, valueSearch, (match, index) => <strong key={index}>{match}</strong>)
                      : value}
                  </SuggestionItemName>
                  <SuggestionItemCategory>{category}</SuggestionItemCategory>
                </SuggestionItemWrapper>
              );
            })}
          </GroupItemsWrapper>
        </Layout.Container>
      ))}
    </SuggestionsWrapper>
  );
};

export default SuggestionsComponent;
