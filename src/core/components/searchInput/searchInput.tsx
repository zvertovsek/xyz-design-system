import Icons, { IconSize } from "@icons";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { MainButton } from "../searchbox/searchbox.styles";
import Matches from "./matches/matches";
import { SearchInputBar, SearchInputBarWrapper, SearchInputForm, SearchInputWrapper } from "./searchInput.styles";
import { SearchInputProps } from "./searchInput.types";
import { Tag, TagTypes } from "@core/components/tag";
import Layout from "@core/components/layout";

export const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  onSubmit,
  onMatchChange,
  onClear,
  value,
  placeholder,
  matches,
  texts,
  isDisabled = false,
  tags = [],
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(!!tags.length);
  const showMatches = typeof matches === "number" && matches !== 1 && onMatchChange;
  const theme = useTheme();

  const iconButtonProps = {
    size: IconSize.xs,
    color: theme.colorPalettes.primary.accent[800],
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
    !!value && setIsCancelVisible(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setIsCancelVisible(false);
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onChange("");
    onClear?.();
    setIsCancelVisible(false);
  };

  useEffect(() => {
    // will be improved with a new ticket for updating when the cancel button should appear
    if (tags.length) {
      setIsCancelVisible(true);
    }
  }, [tags]);

  return (
    <SearchInputWrapper hasShadow={false} hasFocus={isFocused} data-testid="searchWrapper" isDisabled={isDisabled}>
      <SearchInputForm onSubmit={handleSubmit} data-testid="searchForm">
        <SearchInputBarWrapper>
          <Layout.FlexboxContainer gap={theme.spacing[1]}>
            {tags.map((tag) => (
              <Tag key={tag} label={tag} severity={TagTypes.Severity.Warning} />
            ))}
          </Layout.FlexboxContainer>
          <SearchInputBar
            data-testid="searchInput"
            value={value}
            placeholder={!tags.length ? placeholder : undefined}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={!!tags.length}
          />
        </SearchInputBarWrapper>
        {showMatches && (
          <Matches matches={matches} onMatchChange={onMatchChange} texts={texts} data-testid="searchMatches" />
        )}
        {isCancelVisible ? (
          <MainButton type="reset" onClick={handleCancel} data-testid="cancelButton">
            <Icons.CloseIcon {...iconButtonProps} />
          </MainButton>
        ) : (
          <MainButton data-testid="submitButton" type="submit">
            <Icons.SearchIcon {...iconButtonProps} />
          </MainButton>
        )}
      </SearchInputForm>
    </SearchInputWrapper>
  );
};

export default SearchInput;
