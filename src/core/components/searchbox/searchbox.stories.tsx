import { Meta, StoryFn } from "@storybook/react";
import { useEffect, useState } from "react";

import Searchbox from "./searchbox";
import { SearchboxProps, SuggestionItem, SuggestionGroup } from "./searchbox.types";

export default {
  title: "Components/Searchbox",
  component: Searchbox,
} as Meta;

export const Default: StoryFn<SearchboxProps> = (props) => {
  const [value, setValue] = useState<string>(props.value || "");
  const [selectedSuggestionItems, setSelectedSuggestionItems] = useState<SuggestionItem[]>(
    props.selectedSuggestionItems || [],
  );
  const [suggestionGroups, setSuggestionGroups] = useState<SuggestionGroup[]>(props.suggestionGroups || []);
  const [isCancelButtonVisible, setIsCancelButtonVisible] = useState<boolean>(props.isCancelButtonVisible || false);

  const onCancelHandler = () => {
    setValue("");
    setSelectedSuggestionItems([]);
    setIsCancelButtonVisible(false);
  };

  const onAddSuggestionItemHandler = (selectedNode: SuggestionItem) => {
    setSelectedSuggestionItems((prevSelectedNodes) => prevSelectedNodes.concat(selectedNode));
    setValue("");
    setIsCancelButtonVisible(true);
  };

  useEffect(() => {
    const getFilteredGroups = () => {
      const filteredSuggestionGroups: SuggestionGroup[] = [];

      (props.suggestionGroups || []).forEach(({ id, items, title }) => {
        const filteredGroup: SuggestionGroup = {
          id,
          title,
          items: items.filter((item) => item.value.toLowerCase().includes(value.toLowerCase())),
        };
        filteredSuggestionGroups.push(filteredGroup);
      });

      return filteredSuggestionGroups;
    };

    const groupSearch: SuggestionGroup = {
      id: "idSearch",
      title: "Search Everything",
      items: [
        {
          id: `searchItem`,
          value,
          isNotTaggable: true,
          isNotHighlightable: true,
        },
      ],
    };

    setSuggestionGroups([groupSearch, ...getFilteredGroups()]);
  }, [value]);

  return (
    <Searchbox
      {...props}
      value={value}
      onChange={(value) => {
        setValue(value);
        setIsCancelButtonVisible(!!value);
      }}
      onSubmit={() => {
        setIsCancelButtonVisible(true);
      }}
      onCancel={onCancelHandler}
      isCancelButtonVisible={isCancelButtonVisible}
      suggestionGroups={suggestionGroups}
      isDisabled={true}
      selectedSuggestionItems={selectedSuggestionItems}
      onRemoveSuggestionItem={({ value, category }) =>
        setSelectedSuggestionItems((nodes) => {
          const newNodes = nodes.filter((node) => node.category !== category || node.value !== value);

          if (newNodes.length === 0) {
            setIsCancelButtonVisible(false);
          }

          return newNodes;
        })
      }
      onAddSuggestionItem={onAddSuggestionItemHandler}
    />
  );
};

Default.args = {
  placeholder: "Type to search people and assessment comments",
  width: "924px",
  suggestionGroups: [
    {
      id: "idPeoplegroup",
      title: "Looking for People?",
      items: [
        {
          id: "key1",
          value: "Alex Charing",
          category: "adviser",
        },
        {
          id: "key2",
          value: "Mark Zuckerberg",
          category: "boss",
        },
        {
          id: "key3",
          value: "Mark Wahlberg",
          category: "assessor",
        },
        {
          id: "key4",
          value: "Rihanna",
          category: "customer",
        },
        {
          id: "key5",
          value: "Leonardo Di Caprio",
          category: "adviser",
        },
        {
          id: "key6",
          value: "Kevin Hart",
          category: "customer",
        },
        {
          id: "key7",
          value: "Jamie Foxx",
          category: "adviser",
        },
        {
          id: "key8",
          value: "Jennifer Aniston",
          category: "customer",
        },
      ],
    },
  ],
};
Default.storyName = "Searchbox";
