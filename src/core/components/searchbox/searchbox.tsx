import React, { useEffect, useRef, useState } from "react";
import {
  MainButton,
  Searchbar,
  SearchBarInputWrapper,
  SearchboxForm,
  SearchboxWrapper,
  SelectedSuggestionItemsWrapper,
  HintText,
} from "./searchbox.styles";
import { RefTags, SearchboxProps, SuggestionItem } from "./searchbox.types";
import Icons, { IconSize } from "@icons";
import { Tag } from "../tag";
import { SuggestionsComponent } from "./suggestions";
import { capitalizeFirstLetter, getSelectedSuggestion, getSuggestionNodeKeys } from "./searchbox.utils";
import { useTheme } from "styled-components";
import Button from "../button";

export const SearchBox: React.FC<SearchboxProps> = ({
  value,
  placeholder,
  onChange,
  onSubmit,
  onCancel,
  onAddSuggestionItem,
  onRemoveSuggestionItem,
  isDisabled = false,
  suggestionGroups,
  selectedSuggestionItems = [],
  width,
  isCancelButtonVisible = false,
  className,
}) => {
  const [suggestionNodesKeys, setSuggestionNodesKeys] = useState<string[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number>(0);
  const [isSuggestionBoxVisible, setIsSuggestionBoxVisible] = useState<boolean>(false);
  const refTags = useRef<RefTags>({});
  const refSearchbar = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const iconButtonProps = {
    size: IconSize.md,
    color: theme.colorPalettes.primary.accent[800],
  };

  const handleSubmitHandler = () => {
    setIsSuggestionBoxVisible(false);
    refSearchbar.current?.blur();
    onSubmit();
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSubmitHandler();
  };

  const handleFocusOnSearchbar = (): void => {
    refSearchbar.current?.focus();
  };

  const onSubmitItemSelected = (item: SuggestionItem): void => {
    if (item.isNotTaggable) {
      handleSubmitHandler();
    } else {
      onAddSuggestionItem?.(item);
      handleFocusOnSearchbar();
      setSelectedSuggestionIndex(0);
    }
  };

  const handleKeyDownSearchbarInput = (e: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
    const onArrowDownHandler = () => {
      if (selectedSuggestionIndex < suggestionNodesKeys.length - 1) {
        setSelectedSuggestionIndex((prevSelectedIndex) => prevSelectedIndex + 1);
      } else {
        setSelectedSuggestionIndex(0);
      }
    };

    const onArrowUpHandler = () => {
      if (selectedSuggestionIndex > 0) {
        setSelectedSuggestionIndex((prevSelectedIndex) => prevSelectedIndex - 1);
      } else {
        setSelectedSuggestionIndex(suggestionNodesKeys.length - 1);
      }
    };

    const onEnterHandler = () => {
      const selectedSuggestionKey = suggestionNodesKeys[selectedSuggestionIndex];
      const selectedSuggestion = getSelectedSuggestion(selectedSuggestionKey, suggestionGroups);

      onSubmitItemSelected(selectedSuggestion);
    };

    const onBackspaceHandler = () => {
      const lastSelectedTag = selectedSuggestionItems[selectedSuggestionItems.length - 1];
      lastSelectedTag && refTags.current[lastSelectedTag.id]?.focus();
    };

    switch (e.key) {
      case "ArrowDown":
        onArrowDownHandler();
        break;
      case "ArrowUp":
        onArrowUpHandler();
        break;
      case "Enter":
        e.preventDefault();
        onEnterHandler();
        break;
      case "Backspace":
        !value && onBackspaceHandler();
        break;
    }
  };

  const handleFocusSearchbar = (): void => {
    setIsSuggestionBoxVisible(true);
    setSelectedSuggestionIndex(0);
  };

  const handleBlurSearchbox = (e: React.FocusEvent<HTMLDivElement, Element>): void => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsSuggestionBoxVisible(false);
    }
  };

  const onChangeSearchInputHandler = (value: string) => {
    setSelectedSuggestionIndex(0);
    onChange(value);
  };

  const onClickTagHandler = (selectedNode: SuggestionItem) => {
    onRemoveSuggestionItem?.(selectedNode);
    handleFocusOnSearchbar();
  };

  const onKeyDownTagHandler = (e: React.KeyboardEvent<HTMLDivElement>, selectedNode: SuggestionItem) => {
    if (e.key === "Backspace") {
      onClickTagHandler(selectedNode);
    }
  };

  useEffect(() => {
    setSuggestionNodesKeys(getSuggestionNodeKeys(suggestionGroups));
  }, [suggestionGroups]);

  return (
    <SearchboxWrapper
      className={className}
      width={width}
      onBlur={handleBlurSearchbox}
      hasShadow={isSuggestionBoxVisible}
      isDisabled={isDisabled}
    >
      <SearchboxForm onSubmit={submitFormHandler}>
        <SearchBarInputWrapper>
          <SelectedSuggestionItemsWrapper>
            {selectedSuggestionItems.map((selectedNode) => (
              <Tag
                id={selectedNode.id}
                ref={(e) => (refTags.current[selectedNode.id] = e)}
                key={selectedNode.id}
                label={`${capitalizeFirstLetter(selectedNode.category || "")}: ${selectedNode.value}`}
                isRemovable={true}
                isSelected={true}
                onClick={() => onClickTagHandler(selectedNode)}
                onKeyDown={(e) => onKeyDownTagHandler(e, selectedNode)}
              />
            ))}
          </SelectedSuggestionItemsWrapper>
          <Searchbar
            ref={refSearchbar}
            type="text"
            value={value}
            onChange={(e) => onChangeSearchInputHandler(e.target.value)}
            placeholder={!selectedSuggestionItems.length ? placeholder : ""}
            onKeyDown={handleKeyDownSearchbarInput}
            onFocus={handleFocusSearchbar}
            onBlur={() => setSelectedSuggestionIndex(-1)}
            disabled={isDisabled}
          />
        </SearchBarInputWrapper>
        <HintText>
          hit <strong>ENTER</strong> to search
        </HintText>
        {isCancelButtonVisible && (
          <Button.IconButton
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onCancel?.();
            }}
            testId="cancelButton"
            icon={Icons.CloseIcon}
          />
        )}
        <MainButton data-testid="submitButton" disabled={isDisabled}>
          <Icons.SearchIcon {...iconButtonProps} />
        </MainButton>
      </SearchboxForm>
      {!!suggestionGroups.length && isSuggestionBoxVisible && (
        <SuggestionsComponent
          suggestionsNodes={suggestionGroups}
          valueSearch={value}
          selectedSuggestionIndex={selectedSuggestionIndex}
          suggestionNodesKeys={suggestionNodesKeys}
          onSubmitSearch={onSubmitItemSelected}
        />
      )}
    </SearchboxWrapper>
  );
};

export default SearchBox;
